class User{
    private _name: string;
    constructor(name: string){
        this._name = name;
    }   
    get name(): string{
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }
}
const user1 = new User("Khanh");

console.log(`Ten ban dau: ${user1.name}`);

user1.name = "Pham Quoc Khanh";

console.log(`Ten sau khi thay doi: ${user1.name}`);