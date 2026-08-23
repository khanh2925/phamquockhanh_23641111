class Car {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ){}
    showInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
const car1 = new Car("Toyota","Khanh cute",2020)
car1.showInfo();