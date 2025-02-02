const barBtn = document.querySelector('.barcontainer');
const nav = document.querySelector('.aboutNav');

window.onload = function() {
    nav.style.display = 'none';
};


barBtn.onclick = function() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
};