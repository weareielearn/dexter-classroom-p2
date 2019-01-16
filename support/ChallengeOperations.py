from firebase_admin import db

ref_dexter = db.reference('challenges')


def get_user_dexter_community_challenges(sub_community):
    dexter_challenges = ref_dexter.child('dexter/' + sub_community).get()
    return dexter_challenges


def get_user_diy_community_challenges(sub_community):
    diy_challenges = ref_dexter.child('diy/' + sub_community).get()
    return diy_challenges


def admin_create_challenge(ch_name, ch_type, comm, ch):
    challenges = ref_dexter.child(ch_type + '/' + comm + '/' + ch_name).update(ch)
