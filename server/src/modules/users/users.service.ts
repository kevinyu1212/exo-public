import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('이미 가입된 이메일입니다.');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);

    return this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        nickname: dto.nickname,
        region: dto.region,
        bio: dto.bio,
        profile: {
          create: {
            mainSpecies: [],
          },
        },
      },
      select: {
        id: true,
        email: true,
        nickname: true,
        profileImageUrl: true,
        bio: true,
        region: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        nickname: true,
        profileImageUrl: true,
        bio: true,
        region: true,
        createdAt: true,
        updatedAt: true,
        profile: {
          select: {
            breedingYears: true,
            mainSpecies: true,
            trustScore: true,
          },
        },
        _count: {
          select: {
            pets: true,
            listings: true,
            communityPosts: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }

    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findById(id);

    return this.prisma.user.update({
      where: { id },
      data: dto,
      select: {
        id: true,
        email: true,
        nickname: true,
        profileImageUrl: true,
        bio: true,
        region: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
