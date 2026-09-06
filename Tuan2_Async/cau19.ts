interface User19 {
    id: number;
    name: string;
}

function fetchUser19(id: number): Promise<User19> {
    return new Promise<User19>((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: `User ${id}`
            });
        }, 1000);
    });
}

async function fetchUsers19(ids: number[]): Promise<User19[]> {
    const users = await Promise.all(
        ids.map(id => fetchUser19(id))
    );

    return users;
}

async function run19(): Promise<void> {
    const users = await fetchUsers19([1, 2, 3]);
    console.log(users);
}

run19();