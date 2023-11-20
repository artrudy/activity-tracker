import { User } from "./model.js";
// import { Users } from "./model.js";
import { createUser } from "./model.js";

document.querySelector("#createUser")?.addEventListener("click", (e) => {
  e.preventDefault();

  const loginMenu = document.querySelector("#userLogin") as HTMLElement;
  if (loginMenu) loginMenu.style.display = "none";

  const form = document.createElement("form");
  form.id = "registrationForm";

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

  const registrationMessage = document.createElement("div");
  registrationMessage.classList.add("message");
  form.appendChild(registrationMessage);
  form.appendChild(document.createElement("br"));

  const submitButton = document.createElement("button");
  submitButton.textContent = "Register";
  submitButton.type = "button";
  submitButton.addEventListener("click", validateForm);
  form.appendChild(submitButton);

  loginInput.addEventListener("input", () => {
    const login = loginInput.value;
    const userExists = localStorage.getItem(login) !== null;
    loginInput.setCustomValidity(userExists ? "Login already exists..." : "");
    loginInput.reportValidity();

    const elementsToToggle = [
      nameLabel,
      nameInput,
      surnameLabel,
      surnameInput,
      passwordLabel,
      passwordInput,
      submitButton,
    ];

    if (userExists) {
      elementsToToggle.forEach((element) => {
        element.classList.add("hide");
      });
    } else {
      elementsToToggle.forEach((element) => {
        element.classList.remove("hide");
      });
    }
  });

  function validateForm() {
    const login = loginInput.value;

    const name = nameInput.value;
    const surname = surnameInput.value;
    const password = passwordInput.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      registrationMessage.textContent =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.";
    } else {
      registrationMessage.textContent = "Registartion successful!";
      const user: User = {
        name: name,
        surname: surname,
        login: login,
        password: password,
      };
      createUser(user);
    }
  }

  document.body.appendChild(form);
});

document.querySelector("#login")?.addEventListener("click", () => {
  console.log("log");
});
