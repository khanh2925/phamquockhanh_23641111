const promise10 = new Promise<string>((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Thanh cong");
    } else {
        reject("That bai");
    }
});

promise10
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done");
    });