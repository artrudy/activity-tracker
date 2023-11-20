var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [];
function createUser(user) {
    var newUser = __assign(__assign({}, user), { id: crypto.randomUUID() });
    users.push(newUser);
    var userToLocalStorage = JSON.stringify(newUser);
    localStorage.setItem(newUser.login, userToLocalStorage);
    return users;
}
