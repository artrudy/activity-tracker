type User = {
  id: string;
  name: string;
  surname: string;
  login: string;
  password: string;
};

type Activity = {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date;
  pauses: { startTime: Date; endTime: Date }[];
};
