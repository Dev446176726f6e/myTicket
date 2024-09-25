import { PartialType } from "@nestjs/mapped-types";
import { CreateRegionDto } from "./create-venue.dto";

export class UpdateRegionDto extends PartialType(CreateRegionDto) {}
