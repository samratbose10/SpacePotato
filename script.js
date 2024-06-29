document.addEventListener('DOMContentLoaded', function() {
    const potato = document.getElementById('potato');
    const startButton = document.getElementById('startButton');
    const bgMusic = document.getElementById('bgMusic');
    let posX = 50;
    let posY = 50;

    function movePotato() {
        posX += Math.random() * 4 - 2;
        posY += Math.random() * 4 - 2;

        if (posX < 0) posX = 0;
        if (posX > 100) posX = 100;
        if (posY < 0) posY = 0;
        if (posY > 100) posY = 100;

        potato.style.left = `${posX}%`;
        potato.style.top = `${posY}%`;
    }

    setInterval(movePotato, 100);

    function createStars() {
        const space = document.getElementById('space');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 5 + 2}s`;
            space.appendChild(star);
        }
    }

    createStars();

    startButton.addEventListener('click', function() {
        bgMusic.play();
        startButton.style.display = 'none';
    });
});