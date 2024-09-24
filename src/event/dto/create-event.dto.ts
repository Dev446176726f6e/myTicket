export class CreateEventDto {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_Id: number;
  human_category_Id: number;
  venueId: number;
  langId: number;
  release_date: string;
}
