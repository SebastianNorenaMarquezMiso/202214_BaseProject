import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class MemberDTO {
  @IsString()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsDate()
  @IsNotEmpty()
  readonly dateOfBirth: Date;
}
