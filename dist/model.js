"use strict";
exports.__esModule = true;
exports.createUser = void 0;
var users = [];
function createUser(user) {
    users.push(user);
    var userToLocalStorage = JSON.stringify(user);
    localStorage.setItem(user.login, userToLocalStorage);
    return users;
}
exports.createUser = createUser;
