function moveButton() {
    var button = document.querySelector('button');
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Eat a bag of dicks";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})