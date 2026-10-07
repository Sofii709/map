const map = document.getElementById('map');
const mapContainer = document.getElementById('map-container');
const message = document.getElementById('message');

const mapWidth = 1200;
const mapHeight = 800;
function rand(max) {
    return Math.floor(Math.random() * max);
}
const treasureX = rand(mapWidth);
const treasureY = rand(mapHeight);
const treasureDot = document.createElement('div');
treasureDot.className = 'treasure-point';
treasureDot.style.left = treasureX + 'px';
treasureDot.style.top = treasureY + 'px';
mapContainer.appendChild(treasureDot);
const clickRadius = 15;
map.addEventListener('click', function(event) {
    const clickX = event.offsetX;
    const clickY = event.offsetY;
    const diffX = clickX - treasureX;
    const diffY = clickY - treasureY;
    const distance = Math.sqrt((diffX * diffX) + (diffY * diffY));

    if (distance <= clickRadius) {
        message.textContent = `Ви знайшли скарб на координатах X: ${clickX}, Y: ${clickY}!`;
        message.style.color = "green";
        alert("Скарб знайдено");
    } else {
        message.textContent = "Мимо";
        message.style.color = "red";
        const cross = document.createElement('span');
        cross.className = 'miss-mark';
        cross.textContent = '❌';
        
        cross.style.left = clickX + 'px';
        cross.style.top = clickY + 'px';
        
        mapContainer.appendChild(cross);
    }
});
