type User = {
  id: string;
  name: string;
  surname: string;
  login: string;
  password: string;
};

type Users = User[];

const users = [] as Users;

type Activity = {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date;
  pauses: { startTime: Date; endTime: Date }[];
};

function createUser(user: Omit<User, "id">): User[] {
  const newUser: User = {
    ...user,
    id: crypto.randomUUID(),
  };

  users.push(newUser);

  const userToLocalStorage = JSON.stringify(newUser);
  localStorage.setItem(newUser.login, userToLocalStorage);

  return users;
}
