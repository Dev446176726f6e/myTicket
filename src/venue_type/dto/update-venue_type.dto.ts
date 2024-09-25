import { PartialType } from "@nestjs/mapped-types";
import { CreateVenueTypeDto } from "./create-venue_type.dto copy";

export class UpdateVenueTypeDto extends PartialType(CreateVenueTypeDto) {}
