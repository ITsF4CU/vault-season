const btn = document.querySelector('#cinematic-btn');
const quit = document.querySelector('#quit-button');
const container = document.querySelector('#vid-container');
const iframe = container.querySelector('iframe');

const videoSrc = iframe.src;


const music = document.querySelector('#secondnight-audio');
const audioBtn = document.querySelector('#audio-btn');
const audioIcon = audioBtn.querySelector('i'); 


btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    iframe.src = videoSrc;
    container.classList.add('active');


    music.play();
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


audioBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();


    music.play();

    if (music.muted) {
        music.muted = false;
        audioIcon.className = 'ph ph-speaker-simple-high';
    } else {
        music.muted = true;
        audioIcon.className = 'ph ph-speaker-simple-slash';
    }
});