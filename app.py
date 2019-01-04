from flask import Flask, render_template, request, session, redirect
from support import SignInOperations

app = Flask(__name__)
app.secret_key = 'dexter-classroom-secret-key'


@app.route('/', methods=['POST', 'GET'])
def home():
    if 'dexter_classroom_session' not in session:
        if request.method == "POST":
            user = request.form['userid']
            session['dexter_classroom_session'] = SignInOperations.get_user(user)
            return redirect('/dashboard')
        else:
            return render_template('home.html')
    else:
        return redirect('/dashboard')


@app.route('/help')
def help_section():
    return render_template('help.html')


@app.route('/forgot')
def forgot():
    if 'dexter_classroom_session' not in session:
        return render_template('forgot.html')
    else:
        return redirect('/')


@app.route('/signout')
def signout():
    if 'dexter_classroom_session' in session:
        session.pop('dexter_classroom_session', dict)
    return redirect('/')


@app.route('/dexter-challenges')
def dexter_challenges():
    if 'dexter_classroom_session' not in session:
        return redirect('/')
    return render_template('dexter-challenges.html')


@app.route('/diy-challenges')
def diy_challenges():
    if 'dexter_classroom_session' not in session:
        return redirect('/')
    return render_template('diy-challenges.html')


@app.route('/dashboard')
def dashboard():
    if 'dexter_classroom_session' not in session:
        return redirect('/')
    return render_template('dashboard.html')


@app.route('/events')
def events():
    if 'dexter_classroom_session' not in session:
        return redirect('/')
    return render_template('events.html')


@app.route('/settings')
def settings():
    if 'dexter_classroom_session' not in session:
        return redirect('/')
    return render_template('settings.html')


if __name__ == '__main__':
    app.run(debug=True)
