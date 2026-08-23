class Book {
    constructor(
        public title: string,
        public author: string,
        public year: number
    ) {}

    showInfo(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
    }
}

const book1 = new Book(
    "De Men Phieu Luu Ky",
    "To Hoai",
    1941
);

book1.showInfo();