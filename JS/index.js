// Elementos del DOM
const btn = document.querySelector('#trailer-1');
const btnTwo = document.querySelector('.trailer-2');

const container = document.querySelector('#vid-container');
const containerTwo = document.querySelector('#vid-container-2');

const iframe = container.querySelector('iframe');
const iframeTwo = containerTwo.querySelector('#short-trailer');


const videoSrc1 = iframe.src;
const videoSrc2 = "https://www.youtube.com/embed/Ngw_pgbAOFA";


const quit = container.querySelector('#quit-button');
const quitTwo = containerTwo.querySelector('#quit-button-2');


const music = document.querySelector('#secondnight-audio');
const audioBtn = document.querySelector('#audio-btn');
const audioIcon = audioBtn.querySelector('i'); 


btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    iframe.src = videoSrc1;
    container.classList.add('active');

    music.play().catch(()=>{});
    music.muted = true;
    audioIcon.className = 'ph ph-speaker-simple-slash';
});


btnTwo.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    iframeTwo.src = videoSrc2;
    containerTwo.classList.add('active');

    music.play().catch(()=>{});
    music.muted = true;
    audioIcon.className = 'ph ph-speaker-simple-slash';
});


quit.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    container.classList.remove('active');
    iframe.src = "";

    music.muted = false;
    audioIcon.className = 'ph ph-speaker-simple-high';
});

quitTwo.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    containerTwo.classList.remove('active');
    iframeTwo.src = "";

    music.muted = false;
    audioIcon.className = 'ph ph-speaker-simple-high';
});


audioBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    music.play().catch(()=>{});

    if (music.muted) {
        music.muted = false;
        audioIcon.className = 'ph ph-speaker-simple-high';
    } else {
        music.muted = true;
        audioIcon.className = 'ph ph-speaker-simple-slash';
    }
});