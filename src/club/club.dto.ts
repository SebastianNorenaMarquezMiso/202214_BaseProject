import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class ClubDTO {
  @IsString()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsNotEmpty()
  readonly photo: string;
  @IsDate()
  @IsNotEmpty()
  readonly foundationDate: Date;
}
