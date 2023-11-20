document.querySelector("#createUser")?.addEventListener("click", (e) => {
  e.preventDefault();

  const loginMenu = document.querySelector("#userLogin") as HTMLElement;
  if (loginMenu) loginMenu.style.display = "none";

  const form = document.createElement("form");

  const loginLabel = document.createElement("label");
  loginLabel.textContent = "Login:";
  form.appendChild(loginLabel);

  const loginInput = document.createElement("input");
  loginInput.type = "text";
  loginInput.id = "login";
  loginInput.required = true;
  loginInput.autocomplete = "off";
  form.appendChild(loginInput);
  form.appendChild(document.createElement("br"));

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.required = true;
  form.appendChild(nameInput);
  form.appendChild(document.createElement("br"));

  const surnameLabel = document.createElement("label");
  surnameLabel.textContent = "Surname:";
  form.appendChild(surnameLabel);

  const surnameInput = document.createElement("input");
  surnameInput.type = "text";
  surnameInput.id = "surname";
  surnameInput.required = true;
  form.appendChild(surnameInput);
  form.appendChild(document.createElement("br"));

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  form.appendChild(passwordLabel);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.required = true;
  form.appendChild(passwordInput);
  form.appendChild(document.createElement("br"));

  const passwordError = document.createElement("div");
  passwordError.classList.add("error-message");
  form.appendChild(passwordError);
  form.appendChild(document.createElement("br"));

  const submitButton = document.createElement("button");
  submitButton.textContent = "Register";
  submitButton.type = "button";
  submitButton.addEventListener("click", validateForm);
  form.appendChild(submitButton);

  function validateForm() {
    const login = loginInput.value;
    const name = nameInput.value;
    const surname = surnameInput.value;
    const password = passwordInput.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      passwordError.textContent =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.";
    } else {
      passwordError.textContent = "";
      alert("Registration successful!");
    }
  }

  document.body.appendChild(form);

  console.log("plus");
});

document.querySelector("#login")?.addEventListener("click", () => {
  console.log("log");
});
