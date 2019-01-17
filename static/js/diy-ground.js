var quit = document.getElementById("quit");
var entities = {
    'amp': '&',
    'apos': '\'',
    '#x27': '\'',
    '#x2F': '/',
    '#39': '\'',
    '#47': '/',
    'lt': '<',
    'gt': '>',
    'nbsp': ' ',
    'quot': '"',
    '#34': '\"'
}
///////
var photopath;
var evaluate = document.getElementById('evaluate');
var photo = document.getElementById('photo');
var photo_l = document.getElementById('photo_l');
var photo_b = document.getElementById('photo_b');

quit.addEventListener("click", onQuit);

function onQuit() {
    window.location = "/diy-ground";
}

function decodeHTMLEntities(text) {
    return text.replace(/&([^;]+);/gm, function (match, entity) {
        return entities[entity] || match
    })
}
photo.addEventListener('change', function (event) {
    var t = photo.value.split('\\');
    t = t[t.length-1]
    photo_l.innerHTML = "Uploading: " + t;
    const file = event.target.files[0];
    photopath = new Blob([file]);
    uploadDexterFile(photopath)
}, false);

function uploadDexterFile(blob) {
    var storageRef = firebase.storage().ref();
    var pic = storageRef.child('feedback/diy/' + user_community + '/' + user_id + ".jpg");
    evaluate.disabled = true;
    photo.disabled = true;
    photo_b.disabled = true;
    pic.put(blob).then(function (snapshot) {
        alert("Upload Completed");
        evaluate.disabled = false;
        photo.disabled = false;
        photo_b.disabled = false;
        photo_l.innerHTML = photo_l.innerHTML.replace("Uploading: ", "");
    });
}