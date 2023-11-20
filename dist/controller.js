var _a, _b;
(_a = document.querySelector("#createUser")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    var loginMenu = document.querySelector("#userLogin");
    if (loginMenu)
        loginMenu.style.display = "none";
    var form = document.createElement("form");
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
    var passwordError = document.createElement("div");
    passwordError.classList.add("error-message");
    form.appendChild(passwordError);
    form.appendChild(document.createElement("br"));
    var submitButton = document.createElement("button");
    submitButton.textContent = "Register";
    submitButton.type = "button";
    submitButton.addEventListener("click", validateForm);
    form.appendChild(submitButton);
    function validateForm() {
        var login = loginInput.value;
        var name = nameInput.value;
        var surname = surnameInput.value;
        var password = passwordInput.value;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            passwordError.textContent =
                "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.";
        }
        else {
            passwordError.textContent = "";
            alert("Registration successful!");
        }
    }
    document.body.appendChild(form);
    console.log("plus");
});
(_b = document.querySelector("#login")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    console.log("log");
});
