class BankAccount {
    private blance: number;
    constructor(blance: number){
        this.blance = blance;
    }
    deposit(tienGui : number): void{
        this.blance += tienGui;
        console.log(`So tien trong tai khoan sau khi gui: ${this.blance}`);
    }
    withdraw(tienRut: number): void{
        if(tienRut > this.blance){
            console.log(`So tien trong tai khoan khong du de rut`);
        }else{
            this.blance -= tienRut;
            console.log(`So tien trong tai khoan sau khi rut: ${this.blance}`);
        }
    }
    showBalance(): void{
        console.log(`So tien trong tai khoan: ${this.blance}`); 
    }
}
const account1 = new BankAccount(1000);

account1.deposit(500);
account1.withdraw(300);
account1.showBalance();