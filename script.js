document.addEventListener('DOMContentLoaded', function() {
    const potato = document.getElementById('potato');
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
