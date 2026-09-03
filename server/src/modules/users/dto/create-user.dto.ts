import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 72)
  password: string;

  @IsString()
  @Length(2, 30)
  nickname: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  region?: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  bio?: string;
}
