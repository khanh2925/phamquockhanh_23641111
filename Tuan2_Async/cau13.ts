function errorTask13(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}

async function run13(): Promise<void> {
    try {
        const result = await errorTask13();
        console.log(result);
    } catch (error) {
        console.log(`Loi: ${error}`);
    }
}

run13();