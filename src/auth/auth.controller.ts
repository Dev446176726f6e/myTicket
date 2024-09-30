import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

import { SignInDto } from "./dto/signin.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signIn(@Body() signinDto: SignInDto) {
    return this.authService.signIn(signinDto);
  }
}
