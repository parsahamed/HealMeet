import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  emailOrPhone: string;

  @IsString()
  password: string;
}
