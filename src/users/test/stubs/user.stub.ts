import { User } from "../../model/user.model";

export const userStub = (): Partial<User> => {
  return {
    id: 1,
    name: "user",
    email: "user1@mail.com",
    password: "1234567",
    role_value: "ADMIN",
    is_active: true,
  };
};
