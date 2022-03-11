import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Connection, createConnection, } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        private userRepo: UserRepository,
        ){}
    async createUser(body: CreateUserDto){
            const user = new User()
            user.name = body.name;
            user.email = body.email;
            const save = await this.userRepo.save(user);

            if(!save) {
                throw new InternalServerErrorException("Houve algum erro!");
                ;
            }

            return save;
    }
}
