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

quit.addEventListener("click", onQuit);

function onQuit() {
    window.location = "/diy-ground";
}

function decodeHTMLEntities(text) {
    return text.replace(/&([^;]+);/gm, function (match, entity) {
        return entities[entity] || match
    })
}