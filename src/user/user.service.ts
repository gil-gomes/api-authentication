import { Injectable, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        private userRepo: UserRepository,
        ){}

    async findOne(email: string): Promise<User | undefined> {
        return await this.userRepo.findOne({ email: email });
    }

    async createUser(body: CreateUserDto){
        const checkUser = await this.findOne(body.email);
        if (checkUser) {
            throw new BadRequestException('Já existe um usuário com esse e-mail!');
        }

        const user = User.create(body);
        
        const save = await this.userRepo.save(user);

        if(!save) {
            throw new InternalServerErrorException("Houve algum erro!");
            ;
        }

        delete save.password;

        return save;
    }
}
