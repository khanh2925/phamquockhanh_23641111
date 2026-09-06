function task16(name: string, time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`${name} hoan thanh`);
        }, time);
    });
}

async function run16(): Promise<void> {
    const results = await Promise.all([
        task16("Task 1", 1000),
        task16("Task 2", 2000),
        task16("Task 3", 3000)
    ]);

    console.log(results);
}

run16();