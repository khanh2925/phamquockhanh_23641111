class Rectangle {
    constructor(
        public width: number,
        public height: number
    ){}
    dienTich(): number {
        return this.width * this.height;
    }
    chuVi(): number {
        return 2 * (this.width + this.height);
    }  
}
const rectangle1 = new Rectangle(5, 3);

console.log(`Dien Tich: ${rectangle1.dienTich()}`);
console.log(`Chu Vi: ${rectangle1.chuVi()}`);