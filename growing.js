// Global module
function growing() {
    let txt = document.querySelector('.main-heading');
    let size = 30;
    let going = setInterval(function () {
        txt.style.fontSize = `${++size}px`;
        if (size == 100) {
            clearInterval(going);
        }
    }, 1000);
    return size;
}

module.exports = growing;