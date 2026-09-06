async function fetchTodo21(): Promise<void> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(`Loi: ${error}`);
    }
}

fetchTodo21();