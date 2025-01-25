function solve() {
    const heroesCreator = {
        mage,
        fighter
    }

    let heroe = {};

    function fighter(input) {
        heroe = {
            name: input,
            health: 100,
            stamina: 100,
            fight: function () {
                this.stamina--;
                console.log(`${this.name} slashes the foe!`);
            }
        }

        return heroe;
    }

    function mage(input) {
        heroe = {
            name: input,
            health: 100,
            mana: 100,
            cast: function (castName) {
                this.mana--;
                console.log(`${this.name} cast ${castName}`);
            }
        }

        return heroe;
    }

    return heroesCreator;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);