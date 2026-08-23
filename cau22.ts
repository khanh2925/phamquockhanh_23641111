class Stack22<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const stack22 = new Stack22<number>();

stack22.push(10);
stack22.push(20);
stack22.push(30);

console.log(`Phan tu tren cung: ${stack22.peek()}`);
console.log(`Lay ra: ${stack22.pop()}`);
console.log(`Stack rong: ${stack22.isEmpty()}`);