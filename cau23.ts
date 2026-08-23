interface Payment23 {
    pay(amount: number): void;
}

class CashPayment23 implements Payment23 {
    pay(amount: number): void {
        console.log(`Thanh toan tien mat: ${amount}`);
    }
}

class CardPayment23 implements Payment23 {
    pay(amount: number): void {
        console.log(`Thanh toan bang the: ${amount}`);
    }
}

const cash23 = new CashPayment23();
const card23 = new CardPayment23();

cash23.pay(500000);
card23.pay(1000000);