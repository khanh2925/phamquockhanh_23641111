interface Animal {
    name: string;
    sound(): void;
}
class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(): void {
        console.log(`${this.name} Gau gau`);
    }
}
const dog1 = new Dog("Milu");
dog1.sound();