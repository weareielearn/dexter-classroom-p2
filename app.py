from flask import Flask, render_template

app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def home():
    return render_template('home.html')


@app.route('/help')
def help():
    return render_template('help.html')


@app.route('/forgot')
def forgot():
    return render_template('forgot.html')


if __name__ == '__main__':
    app.run(debug=True)
