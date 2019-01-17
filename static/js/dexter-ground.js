var count = 0;
var next = document.getElementById("next");
var prev = document.getElementById("prev");
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
var photopath;
var evaluate = document.getElementById('evaluate');
var photo = document.getElementById('photo');
var photo_l = document.getElementById('photo_l');
var photo_b = document.getElementById('photo_b');

next.addEventListener("click", nextClick);
prev.addEventListener("click", prevClick);
quit.addEventListener("click", onQuit);
buttonCheck();

function nextClick() {
    if (count < cha_len) {
        count++;
        buttonCheck();
    }
}

function prevClick() {
    if (count > 0) {
        count--;
        buttonCheck();
    }
}

function buttonCheck() {
    next.classList.remove('mdl-button--disabled');
    prev.classList.remove('mdl-button--disabled');
    if (count === 0) {
        prev.classList.add('mdl-button--disabled');
    }
    if (count === cha_len) {
        next.classList.add('mdl-button--disabled');
    }
}

function onQuit() {
    window.location = "/dexter-box-projects";
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
    var pic = storageRef.child('feedback/dexter/' + user_community + '/' + user_id + ".jpg");
    evaluate.disabled = true;
    photo.disabled = true;
    photo_b.disabled = true;
    pic.put(blob).then(function (snapshot) {
        console.log('Uploaded a blob or file!');
        alert("Upload Completed");
        evaluate.disabled = false;
        photo.disabled = false;
        photo_b.disabled = false;
        photo_l.innerHTML = photo_l.innerHTML.replace("Uploading: ", "");
    });
}