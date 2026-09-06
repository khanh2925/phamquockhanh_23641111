class Repository21<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const repo21 = new Repository21<string>();

repo21.add("Sach A");
repo21.add("Sach B");
repo21.add("Sach C");

console.log(repo21.getAll());