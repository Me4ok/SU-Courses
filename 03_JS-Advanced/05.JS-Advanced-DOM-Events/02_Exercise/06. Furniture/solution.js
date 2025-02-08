function solve() {
    // select all usable elements
    const inputEl = document.querySelector('#exercise textarea');
    const btns = document.querySelectorAll('#exercise button');
    let generateBtn;
    let buyBtn;
    Array.from(btns).forEach(btn => {
        if (btn.textContent.toLowerCase().includes('generate')) {
            generateBtn = btn;

        } else {
            buyBtn = btn;
        }
    });
    const tableEl = document.querySelector('.table tbody');
    
    // Add eventListeners to the buttons
    generateBtn.addEventListener('click', addProduct);
    buyBtn.addEventListener('click', buyProducts);

    function addProduct(e) {
        const productAttributes = JSON.parse(inputEl.value);

        productAttributes.forEach(product => {
            let newTr = document.createElement('tr');
            
            let tdImg = document.createElement('td');
            let imgEl = document.createElement('img');
            imgEl.src = product.img;
            tdImg.appendChild(imgEl);
            newTr.appendChild(tdImg);
    
            let tdName = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = product.name;
            tdName.appendChild(pName);
            newTr.appendChild(tdName);
    
            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = product.price;
            tdPrice.appendChild(pPrice);
            newTr.appendChild(tdPrice);
    
            let tdDecFac = document.createElement('td');
            let pDecFac = document.createElement('p');
            pDecFac.textContent = product.decFactor;
            tdDecFac.appendChild(pDecFac);
            newTr.appendChild(tdDecFac);
            
            let tdCheck = document.createElement('td');
            let checkboxEl = document.createElement('input');
            checkboxEl.type = 'checkbox';
            tdCheck.appendChild(checkboxEl);
            newTr.appendChild(tdCheck);
            
            tableEl.appendChild(newTr);

        });
    }

    function buyProducts(e) {
        const checkBoxElmnts = tableEl.querySelectorAll('tr td input[type="checkbox"]');
        let purchased = [];
        let totalPrice = 0;
        let sumDecFactor = 0;

        for (let checkbox of Array.from(checkBoxElmnts)) {
            if (checkbox.checked) {
                const checkboxParentRow = checkbox.parentNode.parentNode;
                const productName = checkboxParentRow.querySelector('td:nth-of-type(2) p').textContent;
                const productPrice = Number(checkboxParentRow.querySelector('td:nth-of-type(3) p').textContent);
                const productDecFactor = Number(checkboxParentRow.querySelector('td:nth-of-type(4) p').textContent);
                purchased.push(productName);
                totalPrice += productPrice;
                sumDecFactor += productDecFactor;
            }
        }

        let outputArea = document.querySelector('#exercise textarea:nth-of-type(2)');
        console.log(outputArea);
        outputArea.textContent += `Bought furniture: ${purchased.join(', ')}` + '\n';
        outputArea.textContent += `Total price: ${totalPrice.toFixed(2)}` + '\n';
        outputArea.textContent += `Average decoration factor: ${sumDecFactor / purchased.length}`;
    }
}

/*
[{
    "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
    "name": "Sofa",
    "price": 150,
    "decFactor": 1.2
}]
*/

/*
<tr>
    <td>
        <img src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
    </td>
    <td>
        <p>Office chair</p>
    </td>
    <td>
        <p>160</p>
    </td>
    <td>
        <p>0.5</p>
    </td>
    <td>
        <input type="checkbox" disabled="">
    </td>
</tr>
*/