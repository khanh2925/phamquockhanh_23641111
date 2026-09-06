function downloadFile25(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Tai file hoan tat");
        }, 3000);
    });
}

async function run25(): Promise<void> {
    console.log("Dang tai file...");

    const result = await downloadFile25();

    console.log(result);
}

run25();