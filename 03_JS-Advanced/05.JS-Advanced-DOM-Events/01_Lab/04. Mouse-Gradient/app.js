function attachGradientEvents() {
    const gradient = document.querySelector('#gradient');
    let outputElement = document.getElementById('result');
    gradient.addEventListener('mousemove', (e) => {
        const areaWidth = e.target.clientWidth;
        const realPosition = e.offsetX;
        const result = Math.floor(realPosition / areaWidth * 100);
        
        outputElement.textContent = `${result}%`;
    });
}