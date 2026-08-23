interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Bird implements Flyable {
    fly(): void {
        console.log("Chim dang bay");
    }
}

class Fish implements Swimmable {
    swim(): void {
        console.log("Ca dang boi");
    }
}

const bird1 = new Bird();
const fish1 = new Fish();

bird1.fly();
fish1.swim();