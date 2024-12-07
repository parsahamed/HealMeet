import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  // Registration
  async register(registerDto: RegisterDto) {
    const { email, phoneNumber, password } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        email,
        phoneNumber,
        password: hashedPassword,
      },
    });
    return user;
  }

  // Login
  async login(loginDto: LoginDto) {
    const { emailOrPhone, password } = loginDto;
    const user = await this.prisma.user.findUnique({
      where: {
        email: emailOrPhone.includes('@') ? emailOrPhone : undefined,
        phoneNumber: emailOrPhone.includes('@') ? undefined : emailOrPhone,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = {
        username: user.email || user.phoneNumber,
        sub: user.id,
      };
      const accessToken = jwt.sign(payload, 'your-secret-key', {
        expiresIn: '1h',
      });
      return { accessToken };
    }

    throw new Error('Invalid credentials');
  }
}
