function solve() {
    let products = new Set(); // to save unique product names only
    let totalPrice = 0; // to trupa price for all of the purchased products
    const addBtns = document.querySelectorAll('div.shopping-cart .product .product-add'); // extract all add product btn elements
    let resultArea = document.querySelector('textarea');
    const checkoutBtn = document.querySelector('.checkout');

    // attach click event for each btn
    Array.from(addBtns).forEach(btn => btn.addEventListener('click', add));
    checkoutBtn.addEventListener('click', checkout);

    function add(e) {
        const productInfo = e.currentTarget.parentNode;
        const productName = productInfo.querySelector('.product-details .product-title').textContent;
        const productPrice = Number(productInfo.querySelector('.product-line-price').textContent);
        
        products.add(productName); // add current product to the list. As it is Set(), will keep unique values only
        totalPrice += productPrice; // add current product price to the total price
        resultArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n` // append selected products info to the result text area
    }

    function checkout(e) {
        // add final products info to the result text area
        resultArea.textContent += `You bought ${Array.from(products.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`;

        // disable all add btns
        Array.from(addBtns).forEach(btn => {
            btn.querySelector('.add-product').disabled = 'true';
        });
        // disable checkout btn
        e.target.disabled = 'true';
    }
}