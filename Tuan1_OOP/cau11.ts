class Animal {
    constructor(public name: string) {}
}

class Dogg extends Animal {
    bark(): void {
        console.log(`${this.name} Gau gau`);
    }
}

class Catt extends Animal {
    meow(): void {
        console.log(`${this.name} Meo meo`);
    }
}

const dogg1 = new Dogg("Milu");
const catt1 = new Catt("Tom");

dogg1.bark();
catt1.meow();