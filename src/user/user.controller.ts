import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    )
    {}

    @Get()
    async getUser(){
        const user = {name: 'Gil', email: '.gmail.com'};
        return user;
    }

    @Post()
    async create(
        @Body() body: CreateUserDto,
    ){
        return await this.userService.createUser(body);
    }
}
