import * as jwt from 'jsonwebtoken';
import {Component, Inject} from '@nestjs/common';
import {JwtPayload} from '../Session/Interfaces/jwt-payload.interface';
import {Repository} from 'typeorm';
import {UserEntity} from './user.entity';

@Component()
export class AuthService {

    constructor(
        @Inject('UserRepository') private readonly userRepository: Repository<UserEntity>,
    ) {}

    async createToken(logInfo: any) {
        const user: JwtPayload = logInfo;
        const expiresIn = 3600;
        const accessToken = jwt.sign(user, 'secretKey', { expiresIn });
        return {
            expiresIn,
            accessToken,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.userRepository.findOne({where: {userName: payload.username}});
        if (user && user.password == payload.password && user.userType == payload.role) {
            return user;
        } else {
            return null;
        }
    }
}
