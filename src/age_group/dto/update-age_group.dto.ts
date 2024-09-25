import { PartialType } from "@nestjs/mapped-types";
import { CreateAgeGroupDto } from "./create-age_group.dto copy";

export class UpdateAgeGroupDto extends PartialType(CreateAgeGroupDto) {}
