const slot1H = document.getElementById("slot1H");
const slot2H = document.getElementById("slot2H");
const slot3H = document.getElementById("slot3H");
const slot4H = document.getElementById("slot4H");
const slot1p = document.getElementById("slot1p");
const slot2p = document.getElementById("slot2p");
const slot3p = document.getElementById("slot3p");
const slot4p = document.getElementById("slot4p");
const slot1a = document.getElementById("slot1a");
const slot2a = document.getElementById("slot2a");
const slot3a = document.getElementById("slot3a");
const slot4a = document.getElementById("slot4a");
const slot1pics = document.getElementById("slot1pics");
const slot2pics = document.getElementById("slot2pics");
const slot3pics = document.getElementById("slot3pics");
const slot4pics = document.getElementById("slot4pics");
const reloadBtn = document.getElementById("reloadBtn");

const songsr = ["My gasoline", "Heute Nacht", "Activating", "No Escape (Sped Up)", "Ecstasy", "Open Sesame (Abracadabra)", "Tell Me Why", "Satisfaction"];
const descriptions = {
    "My gasoline": "Fēlēs, Maddix",
    "Heute Nacht": "Maddix",
    "Activating": "Maddix",
    "No Escape (Sped Up)": "Maddix",
    "Ecstasy": "Maddix",
    "Open Sesame (Abracadabra)": "Maddix, Leila K",
    "Tell Me Why": "Supermode, Maddix",
    "Satisfaction": "David Guetta, Maddix, Benny Benassi, Hardwell"
};
const urls = {
    "My gasoline": "https://www.youtube.com/watch?v=KAX7gNrw4nA",
    "Heute Nacht": "https://www.youtube.com/watch?v=tAdxIzs-vXU",
    "Activating": "https://www.youtube.com/watch?v=qqVKJ7IXVt8",
    "No Escape (Sped Up)": "https://www.youtube.com/watch?v=PK8akaCQIjM",
    "Ecstasy": "https://www.youtube.com/watch?v=0U-_CVq2GfU",
    "Open Sesame (Abracadabra)": "https://www.youtube.com/watch?v=56eCKN5tojQ",
    "Tell Me Why": "https://www.youtube.com/watch?v=Ms6aNrLWaeo",
    "Satisfaction": "https://www.youtube.com/watch?v=kieTmqXcXaA"
};
const pics = {
    "My gasoline": "pictures/1.jpg",
    "Heute Nacht": "pictures/2.jpg",
    "Activating": "pictures/3.jpg",
    "No Escape (Sped Up)": "pictures/4.jpg",
    "Ecstasy": "pictures/5.jpg",
    "Open Sesame (Abracadabra)": "pictures/6.jpg",
    "Tell Me Why": "pictures/7.jpg",
    "Satisfaction": "pictures/8.jpg"
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomizeSongs() {
    shuffle(songsr);
    slot1H.textContent = songsr[0];
    slot1p.textContent = descriptions[songsr[0]];
    slot1a.href = urls[songsr[0]];
    slot1pics.src = pics[songsr[0]];
    slot2H.textContent = songsr[1];
    slot2p.textContent = descriptions[songsr[1]];
    slot2a.href = urls[songsr[1]];
    slot2pics.src = pics[songsr[1]];
    slot3H.textContent = songsr[2];
    slot3p.textContent = descriptions[songsr[2]];
    slot3a.href = urls[songsr[2]];
    slot3pics.src = pics[songsr[2]];
    slot4H.textContent = songsr[3];
    slot4p.textContent = descriptions[songsr[3]];
    slot4a.href = urls[songsr[3]];
    slot4pics.src = pics[songsr[3]];
}

reloadBtn.onclick = randomizeSongs;

// Initial randomization on page load
randomizeSongs();