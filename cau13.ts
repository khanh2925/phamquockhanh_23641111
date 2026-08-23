abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    constructor(public side: number) {
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const square1 = new Square(5);
const circle1 = new Circle(3);

console.log(`Dien tich hinh vuong: ${square1.area()}`);
console.log(`Dien tich hinh tron: ${circle1.area()}`);