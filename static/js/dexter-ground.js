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

$('#photo').change(function (event) {
    photopath = URL.createObjectURL(event.target.files[0]);
});

$("#evaluate").click(function () {
    alert(photopath);
});