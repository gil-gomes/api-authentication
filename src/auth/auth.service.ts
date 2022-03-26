import { Injectable, NotFoundException, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { Request } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ){}

    async validateUser(email: string, password: string): Promise<User >{
        const user = await this.usersService.findOne(email);

        if(!user){
            throw new NotFoundException('Usuário não encontrado!');
        }

        const isValidPassword: boolean = await bcrypt.compare(password, user.password);

        if(user && isValidPassword){
            user.password = '';
            
            return user;
        }

        return null;
    }

    async login(user: any){
        const payload = { email: user.email, sub: user.id };

        return {
            token: this.jwtService.sign(payload),
        }
    }
}
