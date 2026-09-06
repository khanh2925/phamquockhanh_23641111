interface User18 {
    id: number;
    name: string;
}

function fetchUser18(id: number): Promise<User18> {
    return new Promise<User18>((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: `User ${id}`
            });
        }, 1000);
    });
}

async function run18(): Promise<void> {
    const user = await fetchUser18(1);
    console.log(user);
}

run18();