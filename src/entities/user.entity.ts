import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';


export type Props = {
    name: string;
    email: string;
    password: string;
}

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
    })
    name: string;

    @Column()
    email: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    static create(props: Props) {
        const user = new User();
        user.name = props.name;
        user.email = props.email;
        user.password = bcrypt.hashSync(props.password, 10);

        return user;
    }
}