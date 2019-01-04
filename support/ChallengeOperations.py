from firebase_admin import db

ref_dexter = db.reference('challenges')


def get_user_dexter_community_challenges(sub_community):
    dexter_challenges = ref_dexter.child('dexter/' + sub_community).get()
    return dexter_challenges
