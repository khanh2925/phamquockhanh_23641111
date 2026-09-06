async function postData24(): Promise<void> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "Bai viet moi",
                    body: "Noi dung bai viet",
                    userId: 1
                })
            }
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(`Loi: ${error}`);
    }
}

postData24();