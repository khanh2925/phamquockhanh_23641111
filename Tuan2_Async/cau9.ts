const promise9 = new Promise<number[]>((resolve) => {
    setTimeout(() => {
        const numbers = [1, 2, 3, 4, 5, 6];

        const evenNumbers = numbers.filter(
            number => number % 2 === 0
        );

        resolve(evenNumbers);
    }, 1000);
});

promise9.then((result) => {
    console.log(result);
});