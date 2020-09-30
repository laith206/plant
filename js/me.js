

const nav = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    if (top >= 900) {
        nav.classList.add('activ-aa')
    } else {
        nav.classList.remove('activ-aa')
    }
}





