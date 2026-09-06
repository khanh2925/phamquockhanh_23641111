function task15(name: string, time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`${name} hoan thanh`);
        }, time);
    });
}

async function run15(): Promise<void> {
    const result1 = await task15("Task 1", 1000);
    console.log(result1);

    const result2 = await task15("Task 2", 1000);
    console.log(result2);

    const result3 = await task15("Task 3", 1000);
    console.log(result3);
}

run15();