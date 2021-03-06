import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpired: false,
            secretOrKey: process.env.SECRET_KEY,
        })
    }

    async validate(payload: any){
        return { id: payload.sub, email: payload.email };
    }
}