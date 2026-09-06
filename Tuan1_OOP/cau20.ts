interface Vehicle20 {
    move(): void;
}

class Car20 implements Vehicle20 {
    move(): void {
        console.log("Xe hoi dang chay");
    }
}

class Bike20 implements Vehicle20 {
    move(): void {
        console.log("Xe dap dang chay");
    }
}

const car20 = new Car20();
const bike20 = new Bike20();

car20.move();
bike20.move();