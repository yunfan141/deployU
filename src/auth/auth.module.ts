import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import {Module} from '@nestjs/common';

@Module({
    controllers: [AuthController],
    components: [AuthService, JwtStrategy],
})
export class AuthModule {}
