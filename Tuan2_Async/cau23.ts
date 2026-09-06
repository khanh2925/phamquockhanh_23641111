interface Todo23 {
    id: number;
    title: string;
    completed: boolean;
}

async function getCompletedTodos23(): Promise<void> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        const todos = await response.json() as Todo23[];

        const completedTodos = todos.filter(
            todo => todo.completed === true
        );

        console.log(completedTodos);
    } catch (error) {
        console.log(`Loi: ${error}`);
    }
}

getCompletedTodos23();