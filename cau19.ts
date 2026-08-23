class Animall {
    sound(): void {
        console.log("Am thanh dong vat");
    }
}

class Doog extends Animall {
    sound(): void {
        console.log("Gau gau");
    }
}

class Caat extends Animall {
    sound(): void {
        console.log("Meo meo");
    }
}

const animals: Animall[] = [
    new Doog(),
    new Caat()
];

animals.forEach(animal => {
    animal.sound();
});