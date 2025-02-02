function create(words) {
    const mainContent = document.querySelector('#content');

    words.forEach(word => {
        mainContent.appendChild(createHTMLElement(word));
    });

    function createHTMLElement(string) {
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        
        newP.textContent = string;
        newP.style.display = 'none'
        newDiv.appendChild(newP);

        newDiv.addEventListener('click', (e) => {
            newP.style.display = '';
        });
        
        return newDiv;
    }
}