function simulateTask6(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task done after ${time} ms`);
        }, time);
    });
}

const task1 = simulateTask6(1000);
const task2 = simulateTask6(2000);
const task3 = simulateTask6(3000);

Promise.all([task1, task2, task3])
    .then((results) => {
        console.log(results);
    });