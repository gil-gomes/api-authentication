import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jw-auth.guard';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private userRepo: UserRepository,
    )
    {}
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(
        @Req() req: Request,
    ): Promise<any>{
        const user = req.user;

        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUser(){
        return await this.userRepo.find();
    }

    @Post()
    async create(
        @Body() body: CreateUserDto,
    ){
        return await this.userService.createUser(body);
    }
}
