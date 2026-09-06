function createPromise17(
    value: string,
    time: number
): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}

const promises17: Promise<string>[] = [
    createPromise17("Task A", 1000),
    createPromise17("Task B", 2000),
    createPromise17("Task C", 3000)
];

async function run17(): Promise<void> {
    for await (const result of promises17) {
        console.log(result);
    }
}

run17();