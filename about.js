const barBtn = document.querySelector('.barcontainer');
const nav = document.querySelector('.aboutNav');


barBtn.onclick = function() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
};