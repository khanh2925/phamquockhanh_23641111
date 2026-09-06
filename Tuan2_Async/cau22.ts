async function fetchTodo22(id: number): Promise<any> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return await response.json();
}

async function run22(): Promise<void> {
    try {
        const todo1 = await fetchTodo22(1);
        const todo2 = await fetchTodo22(2);
        const todo3 = await fetchTodo22(3);

        console.log(todo1);
        console.log(todo2);
        console.log(todo3);
    } catch (error) {
        console.log(`Loi: ${error}`);
    }
}

run22();