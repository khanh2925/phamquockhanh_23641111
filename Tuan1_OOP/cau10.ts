class Account {
    public username: string;
    private password: string;
    readonly accountId: number;
    constructor(username: string, password: string, accountId: number) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
    }
    showInfo(): void {
        console.log(`Username: ${this.username}`);
        console.log(`Account ID: ${this.accountId}`);
    }
}
const a = new Account("Khanh", "123456", 23641111);

a.showInfo();