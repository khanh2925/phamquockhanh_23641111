const randomPromise = new Promise<number>((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber >= 0.5) {
        resolve(randomNumber);
    } else {
        reject("Random number nho hon 0.5");
    }
});

randomPromise
    .then((result) => {
        console.log(`Thanh cong: ${result}`);
    })
    .catch((error) => {
        console.log(`That bai: ${error}`);
    });