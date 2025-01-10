class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.totalCost = 0;
        this.storage = {};
        this.addProduct = function (obj) {
            this.storage[obj.name] = {
                name: obj.name,
                price: obj.price,
                quantity: obj.quantity,
            };
            this.totalCost += obj.price * obj.quantity;
        };
        this.getProducts = function () {
            let result = '';
            let productsNames = Object.keys(this.storage);
            
            for (let i = 0; i < productsNames.length; i++ ) {
                let productName = productsNames[i];

                // avoid adding new line after the last row
                if (i != productsNames.length - 1) {
                    result += JSON.stringify(this.storage[productName]) + '\n';
                } else {
                    result += JSON.stringify(this.storage[productName]);
                }
            }

            return result;
        }
    }
}

// let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
// let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
// let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);

let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);