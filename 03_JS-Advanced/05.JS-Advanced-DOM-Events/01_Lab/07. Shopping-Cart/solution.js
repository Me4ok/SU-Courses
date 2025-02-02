function solve() {
    let products = new Set(); // to save unique product names only
    let totalPrice = 0; // to trupa price for all of the purchased products
    const addBtns = document.querySelectorAll('div.shopping-cart .product .product-add');
    let resultArea = document.querySelector('textarea');
    const checkoutBtn = document.querySelector('.checkout');

    Array.from(addBtns).forEach(btn => btn.addEventListener('click', add));
    checkoutBtn.addEventListener('click', checkout);

    function add(e) {
        const productInfo = e.currentTarget.parentNode;
        const productName = productInfo.querySelector('.product-details .product-title').textContent;
        const productPrice = Number(productInfo.querySelector('.product-line-price').textContent);
        
        products.add(productName);
        totalPrice += productPrice;
        resultArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
    }

    function checkout(e) {
        resultArea.textContent += `You bought ${Array.from(products.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`;

        Array.from(addBtns).forEach(btn => {
            btn.querySelector('.add-product').disabled = 'true';
        });
        e.target.disabled = 'true';
    }
}