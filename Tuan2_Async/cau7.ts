function simulateTask7(time: number, message: string): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

const promiseA = simulateTask7(3000, "Task A");
const promiseB = simulateTask7(1000, "Task B");
const promiseC = simulateTask7(2000, "Task C");

Promise.race([promiseA, promiseB, promiseC])
    .then((result) => {
        console.log(result);
    });