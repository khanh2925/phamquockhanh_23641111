async function multiplyByThree14(number: number): Promise<number> {
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    return number * 3;
}

async function run14(): Promise<void> {
    const result = await multiplyByThree14(5);
    console.log(`Ket qua: ${result}`);
}

run14();