export type User = {
  // id: string;
  name: string;
  surname: string;
  login: string;
  password: string;
};

export type Users = User[];

const users = [] as Users;

export type Activity = {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date;
  pauses: { startTime: Date; endTime: Date }[];
};

export type Activities = Activity[];

export type UserActivities = { [userName: string]: Activity[] };

export function createUser(user: Omit<User, "id">): User[] {
  users.push(user);

  const userToLocalStorage = JSON.stringify(user);
  localStorage.setItem(user.login, userToLocalStorage);
  console.log("new user created");

  return users;
}

function createNewActivity(
  userName: string,
  name: string,
  startTime: Date,
  endTime: Date
): Activity {
  const newActivity: Activity = {
    id: new Date().getTime().toString(),
    name: name,
    startTime: startTime,
    endTime: endTime,
    pauses: [],
  };

  const userActivities: UserActivities = JSON.parse(
    localStorage.getItem("userActivities") || "{}"
  );
  userActivities[userName] = userActivities[userName] || [];
  userActivities[userName].push(newActivity);

  localStorage.setItem("userActivities", JSON.stringify(userActivities));

  return newActivity;
}
