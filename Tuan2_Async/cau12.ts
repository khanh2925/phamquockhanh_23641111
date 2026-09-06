function simulateTask12(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

async function runTask12(): Promise<void> {
    const result = await simulateTask12(2000);
    console.log(result);
}

runTask12();