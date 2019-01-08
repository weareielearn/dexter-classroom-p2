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
    'quot': '"'
}

next.addEventListener("click", nextClick);
prev.addEventListener("click", prevClick);
quit.addEventListener("click", onQuit);
buttonCheck();

function nextClick() {
    if (count < 5) {
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
    if (count === 5) {
        next.classList.add('mdl-button--disabled');
    }
}

function onQuit() {
    window.location = "/dexter-challenges";
}

function decodeHTMLEntities(text) {
    return text.replace(/&([^;]+);/gm, function (match, entity) {
        return entities[entity] || match
    })
}