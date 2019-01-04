// ui elements
var userid = document.getElementById("userid");
var password = document.getElementById("password");
var signin = document.getElementById("signin");
var eye = document.getElementById("eye");

// listeners
signin.addEventListener("click", signinClick);
eye.addEventListener("click", eyeClick);

// functions
function signinClick() {
    userid.value = userid.value.toUpperCase();
    signinStart();
    var u = userid.value;
    var p = password.value;
    if (u.replace(" ", "") != "" && p.replace(" ", "") != "") {
        var ref = firebase.database().ref("users/" + u);
        ref.once("value")
            .then(function (snapshot) {
                if (snapshot.exists() && snapshot.val().password === p) {
                    // successfull signin
                    signinStop();
                    $("#signinForm").submit()
                    // add action later
                } else {
                    alert("invalid user id and password");
                    signinStop();
                    // add action later
                }
            });
    }
    else {
        alert("invalid user id and password");
        signinStop();
        // add action later
    }
}

function signinStart() {
    userid.disabled = true;
    password.disabled = true;
    signin.disabled = true;
}

function signinStop() {
    userid.disabled = false;
    password.disabled = false;
    signin.disabled = false;
}

function eyeClick() {
    var e = eye.innerHTML;
    if(e==="visibility") {
        eye.innerHTML = "visibility_off";
        password.type="text"
    }
    else {
        eye.innerHTML = "visibility";
        password.type="password"
    }
}