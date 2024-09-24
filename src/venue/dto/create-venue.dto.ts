export class CreateVenueDto {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_Id: number;
  scheme: string[];
  regionId: number;
  districtId: number;
}
