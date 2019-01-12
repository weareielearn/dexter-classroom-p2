from firebase_admin import credentials, db
import firebase_admin

cred = credentials.Certificate('./dexter-classroom-p2.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://dexter-classroom-p2.firebaseio.com/'
})
ref = db.reference('users')


def get_user(userid):
    session_val = ref.child(userid).get()
    session_val['userid'] = userid
    return session_val


def getAdmin(userid):
    return db.reference(userid).get()
