import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../model/user.model";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { Test } from "@nestjs/testing";
import { userStub } from "./stubs/user.stub";

jest.mock("../users.service");

describe("Users controller", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
  });

//   it("Users Controller should be defined", () => {
//     expect(usersController).toBeDefined();
//   });

//   it("Users Controller should be defined", () => {
//     expect(usersController).toBeDefined();
//   });

  describe("create user", () => {
    describe("when create user is called", () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
          role_value: userStub().role_value,
        };
        user = await usersController.create(createUserDto);
        console.log(user);
      });
      it("than it should call usersService", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });
    });
  });

  describe("findall users", () => {
    describe("when findAll users is called", () => {
      let users: User[];
      beforeAll(async () => {
        users = await usersController.findAll();
      });
      it("then it should call usersService", () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });
      it("then it should call Users", () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });
});
