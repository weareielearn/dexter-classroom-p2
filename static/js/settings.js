// init ui
var deleteBtn = document.getElementById('delete_btn');
var userid = document.getElementById('userid').value;

// listeners
deleteBtn.addEventListener('click', deleteOp);

// functions
function deleteOp() {
    firebase.database().ref("users/" + userid).remove().then(function () {
        alert("deleted");
        window.location = "/signout";
    })
        .catch(function (error) {
            console.log("Remove failed: " + error.message)
        });
}