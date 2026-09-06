class Employee {
    constructor(public name: string) {}

    work(): void {
        console.log(`${this.name} dang lam viec`);
    }
}

class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} dang quan ly nhom`);
    }
}

class Developer extends Employee {
    code(): void {
        console.log(`${this.name} dang lap trinh`);
    }
}

const manager1 = new Manager("An");
const developer1 = new Developer("Khanh");

manager1.work();
manager1.manage();

developer1.work();
developer1.code();