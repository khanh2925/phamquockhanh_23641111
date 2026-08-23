class Bookk {
    constructor(public title: string) {}
}

class Userr {
    constructor(public name: string) {}
}

class Library {
    books: Bookk[] = [];
    users: Userr[] = [];

    addBook(book: Bookk): void {
        this.books.push(book);
    }

    addUser(user: Userr): void {
        this.users.push(user);
    }

    showInfo(): void {
        console.log("Danh sach sach:");
        this.books.forEach(book => {
            console.log(book.title);
        });

        console.log("Danh sach nguoi dung:");
        this.users.forEach(user => {
            console.log(user.name);
        });
    }
}

const library1 = new Library();

library1.addBook(new Bookk("De Men Phieu Luu Ky"));
library1.addBook(new Bookk("Nha Gia Kim"));

library1.addUser(new Userr("Khanh"));
library1.addUser(new Userr("Nam"));

library1.showInfo();