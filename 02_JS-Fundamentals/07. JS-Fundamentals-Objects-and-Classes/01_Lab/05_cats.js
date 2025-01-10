function cats(input) {
    let cats = input;
    class Cats {
        constructor(name, age) {
            this.name = name,
            this.age = age
        };     
        meow = () => {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of cats) {
        let [name, age] = cat.split(' ');
        age = Number(age);
        let newCat = new Cats(name, age);
        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);