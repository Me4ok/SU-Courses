function address(input) {
    /*
    // Object way
    let addressList = {};

    for (let line of input) {
        const [name, address] = line.split(':');
        
        addressList[name] = address;
    }

    Object.entries(addressList)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(name, '->', address));
    */

    // Map way
    let addressList = new Map();

    for (let line of input) {
        const [name, address] = line.split(':');

        addressList.set(name, address);
    }

    Array.from(addressList) // because addressList is a Map object, when stated like this, equals to addressList.entries()
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(name, '->', address));
}

address([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
console.log('---');
address([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);