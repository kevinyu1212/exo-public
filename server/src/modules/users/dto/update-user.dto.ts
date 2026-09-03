import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(2, 30)
  nickname?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  region?: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  bio?: string;

  @IsOptional()
  @IsString()
  profileImageUrl?: string;
}
