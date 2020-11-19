const users = [
    { id: 'mn0316', password: '123', name: 'Lee' },
]

export function signIn({ id, password }) {
    const user = users.find(user => user.id === id && user.password === password);
    if (user === undefined) throw new Error();
    return user;
}
