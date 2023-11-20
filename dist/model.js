const users = [];
export function createUser(user) {
    users.push(user);
    const userToLocalStorage = JSON.stringify(user);
    localStorage.setItem(user.login, userToLocalStorage);
    console.log("new user created");
    return users;
}
