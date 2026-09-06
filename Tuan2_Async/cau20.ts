function apiCall20(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("API thanh cong");
        }, 3000);
    });
}

function timeout20(): Promise<never> {
    return new Promise<never>((resolve, reject) => {
        setTimeout(() => {
            reject("API qua thoi gian 2 giay");
        }, 2000);
    });
}

async function run20(): Promise<void> {
    try {
        const result = await Promise.race([
            apiCall20(),
            timeout20()
        ]);

        console.log(result);
    } catch (error) {
        console.log(`Loi: ${error}`);
    }
}

run20();