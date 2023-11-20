// import { User } from "./model.js";
// import { Users } from "./model.js";
// import { createUser } from "./model.js";
var _a, _b;
(_a = document.querySelector("#createUser")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    var loginMenu = document.querySelector("#userLogin");
    if (loginMenu)
        loginMenu.style.display = "none";
    var form = document.createElement("form");
    form.id = "registrationForm";
    var loginLabel = document.createElement("label");
    loginLabel.textContent = "Login:";
    form.appendChild(loginLabel);
    var loginInput = document.createElement("input");
    loginInput.type = "text";
    loginInput.id = "login";
    loginInput.required = true;
    loginInput.autocomplete = "off";
    form.appendChild(loginInput);
    form.appendChild(document.createElement("br"));
    var nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.required = true;
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    var surnameLabel = document.createElement("label");
    surnameLabel.textContent = "Surname:";
    form.appendChild(surnameLabel);
    var surnameInput = document.createElement("input");
    surnameInput.type = "text";
    surnameInput.id = "surname";
    surnameInput.required = true;
    form.appendChild(surnameInput);
    form.appendChild(document.createElement("br"));
    var passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password:";
    form.appendChild(passwordLabel);
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.required = true;
    form.appendChild(passwordInput);
    form.appendChild(document.createElement("br"));
    var registrationMessage = document.createElement("div");
    registrationMessage.classList.add("message");
    form.appendChild(registrationMessage);
    form.appendChild(document.createElement("br"));
    var submitButton = document.createElement("button");
    submitButton.textContent = "Register";
    submitButton.type = "button";
    submitButton.addEventListener("click", validateForm);
    form.appendChild(submitButton);
    loginInput.addEventListener("input", function () {
        var login = loginInput.value;
        var userExists = localStorage.getItem(login) !== null;
        loginInput.setCustomValidity(userExists ? "Login already exists..." : "");
        loginInput.reportValidity();
        var elementsToToggle = [
            nameLabel,
            nameInput,
            surnameLabel,
            surnameInput,
            passwordLabel,
            passwordInput,
            submitButton,
        ];
        if (userExists) {
            elementsToToggle.forEach(function (element) {
                element.classList.add("hide");
            });
        }
        else {
            elementsToToggle.forEach(function (element) {
                element.classList.remove("hide");
            });
        }
    });
    function validateForm() {
        var login = loginInput.value;
        console.log(login, "login");
        var name = nameInput.value;
        var surname = surnameInput.value;
        var password = passwordInput.value;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            registrationMessage.textContent =
                "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.";
        }
        else {
            registrationMessage.textContent = "Registartion successful!";
        }
        function getFormData() {
            var formData = {};
            var formInputs = document.querySelectorAll("form input");
            formInputs.forEach(function (input) {
                if (input.id) {
                    formData[input.id] = input.value;
                }
            });
            console.log(formData);
            return formData;
        }
    }
    document.body.appendChild(form);
});
(_b = document.querySelector("#login")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    console.log("log");
});
function isUserExists(login) {
    var storedData = localStorage.getItem(login);
    if (storedData) {
        var users = JSON.parse(storedData);
        return users.some(function (user) { return user.login === login; });
    }
    return false;
}
