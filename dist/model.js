const users = [];
export function createUser(user) {
    users.push(user);
    const userToLocalStorage = JSON.stringify(user);
    localStorage.setItem(user.login, userToLocalStorage);
    console.log("new user created");
    return users;
}
function createNewActivity(userName, name, startTime, endTime) {
    const newActivity = {
        id: new Date().getTime().toString(),
        name: name,
        startTime: startTime,
        endTime: endTime,
        pauses: [],
    };
    const userActivities = JSON.parse(localStorage.getItem("userActivities") || "{}");
    userActivities[userName] = userActivities[userName] || [];
    userActivities[userName].push(newActivity);
    localStorage.setItem("userActivities", JSON.stringify(userActivities));
    return newActivity;
}
