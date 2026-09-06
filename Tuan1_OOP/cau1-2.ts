class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
// const person1 = new Person("Alice", 30);
// person1.displayInfo();
class Student extends Person{
    grade: number;
    constructor(
        name: string,
        age: number,
        grade: number
    ){
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo(): void {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}
const student1 = new Student("Khanh", 20, 9);
student1.displayAllInfo();