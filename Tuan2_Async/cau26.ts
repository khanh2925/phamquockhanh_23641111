function wait26(time: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function run26(): Promise<void> {
    console.log("Bat dau cho...");

    await wait26(5000);

    console.log("Da cho 5 giay");
}

run26();