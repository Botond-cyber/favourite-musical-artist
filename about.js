const barBtn = document.querySelector('.barcontainer');
const nav = document.querySelector('.aboutNav');
const barcheck = document.getElementById('barcheck');

window.onload = function() {
    nav.style.display = 'none';
    barcheck.checked = false;
};

barBtn.onclick = function() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
};
