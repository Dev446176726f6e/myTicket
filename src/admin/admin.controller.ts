import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { AdminSignInDto } from "./dto/admin.signin.dto";
import { JwtAuthGuard } from "../guard/jwt-auth.guard";
import { SelfGuard } from "../guard/self.guard";
import { SuperAdminGuard } from "../guard/superadmin.guard";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(JwtAuthGuard, SuperAdminGuard)
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.signUp(createAdminDto);
  }

  @Post("signin")
  signIn(@Body() adminsigninDto: AdminSignInDto) {
    return this.adminService.signIn(adminsigninDto);
  }

  @UseGuards(SuperAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Get("all")
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(JwtAuthGuard, SelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @UseGuards(JwtAuthGuard, SuperAdminGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
