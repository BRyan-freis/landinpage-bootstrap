const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

const video = document.getElementById('narracao');
        const audioBtn = document.getElementById('audio-btn');

        // Permite ativar o som
        audioBtn.addEventListener('click', () => {
            video.muted = false;
            video.play();
        });

        // Quando o vídeo termina, mostra controles
        video.addEventListener('ended', () => {
            video.controls = true;
        });

        // Ao clicar no vídeo, reinicia
        video.addEventListener('click', () => {
            if (video.paused || video.ended) {
                video.currentTime = 0;
                video.play();
                video.controls = false;
            }
        });