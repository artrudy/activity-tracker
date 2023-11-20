export type User = {
  // id: string;
  name: string;
  surname: string;
  login: string;
  password: string;
};

export type Users = User[];

const users = [] as Users;

type Activity = {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date;
  pauses: { startTime: Date; endTime: Date }[];
};

export function createUser(user: Omit<User, "id">): User[] {
  users.push(user);

  const userToLocalStorage = JSON.stringify(user);
  localStorage.setItem(user.login, userToLocalStorage);
  console.log("new user created");

  return users;
}
