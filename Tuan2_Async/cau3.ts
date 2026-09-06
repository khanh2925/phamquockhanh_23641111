function getError(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}

getError()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });