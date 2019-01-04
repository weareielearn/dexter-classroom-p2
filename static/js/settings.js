// init ui
var deleteBtn = document.getElementById('delete_btn');
var userid = document.getElementById('userid').value;

// listeners
deleteBtn.addEventListener('click', deleteOp);

// functions
function deleteOp() {
    deleteBtn.disabled = true;
    firebase.database().ref("users/" + userid).remove().then(function () {
        alert("deleted");
        deleteBtn.disabled = false;
        window.location = "/signout";
    })
        .catch(function (error) {
            console.log("Remove failed: " + error.message)
        });
}