function solve() {
    const inputTaskNameEl = document.querySelector('div form input#task');
    const inputTaskDescEl = document.querySelector('div form textarea#description');
    const inputTaskDateEl = document.querySelector('div form input#date');
    let addBtn = document.querySelector('div form button#add');
    const openTasksDiv = document.querySelector('section:nth-of-type(2) div:nth-of-type(2)');
    const inProgressTasksDiv = document.querySelector('section:nth-of-type(3) div:nth-of-type(2)');
    const completeTasksDiv = document.querySelector('section:nth-of-type(4) div:nth-of-type(2)');
    
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault(); // <TODO> to remove when submitting the task
        
        if (inputTaskNameEl.value.length > 0 && inputTaskDescEl.value.length > 0 && inputTaskDateEl.value.length > 0) {
            createArticle();
        };
    }

    function createArticle() {
        let newArticle = document.createElement('article');

        let newH3 = document.createElement('h3');
        newH3.textContent = inputTaskNameEl.value;
        newArticle.appendChild(newH3);

        let newPDescription = document.createElement('p');
        newPDescription.textContent = 'Description: ' + inputTaskDescEl.value;
        newArticle.appendChild(newPDescription);

        let newPDate = document.createElement('p');
        newPDate.textContent = 'Due Date: ' + inputTaskDateEl.value;
        newArticle.appendChild(newPDate);

        let newDiv = document.createElement('div');
        newDiv.classList.add('flex');        
        
        let startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', start);
        newDiv.appendChild(startBtn);        
        
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteElement);
        newDiv.appendChild(deleteBtn);

        newArticle.appendChild(newDiv);

        openTasksDiv.appendChild(newArticle);
    }

    function start(e) {
        // Change start button properties
        let startButton = e.target;
        startButton.textContent = 'Delete'; // Start -> Delete
        startButton.classList.replace('green', 'red');
        startButton.removeEventListener('click', start); // remove start event listener
        startButton.addEventListener('click', deleteElement); // add new eventlistener -> delete

        let deleteBtn = e.target.parentNode.querySelector('button:nth-of-type(2)');
        deleteBtn.textContent = 'Finish'; // Delete -> Finish
        deleteBtn.classList.replace('red', 'orange');
        deleteBtn.removeEventListener('click', deleteElement); // remove delete event listener
        deleteBtn.addEventListener('click', finish); // add new event listener -> finish
        
        // Move the article to "In Progress" section
        const article = e.target.parentNode.parentNode;
        inProgressTasksDiv.appendChild(article);
    }

    function finish(e) {
        const buttonsDiv = e.target.parentNode;
        const articleDiv = e.target.parentNode.parentNode;
        articleDiv.removeChild(buttonsDiv);

        // Move the artcile to "Complete" section
        completeTasksDiv.appendChild(articleDiv);
    }

    function deleteElement(e) {
        e.target.parentNode.parentNode.remove();
    }
}