import { IsDateString, IsString, Length } from 'class-validator';
//~ the message that i typed here is the way to give custom message
export class CreateEventDto {
  @IsString()
  @Length(5, 200, { message: 'The name length should atLeast 5 letter' }) //* this is validation in nest best of it
  name: string;
  @Length(5, 200)
  description: string;
  @IsDateString()
  when: string;
  @Length(10, 200)
  address: string;
}
