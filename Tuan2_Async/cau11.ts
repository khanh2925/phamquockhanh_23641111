function helloAsync(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}

async function run11(): Promise<void> {
    const result = await helloAsync();
    console.log(result);
}

run11();