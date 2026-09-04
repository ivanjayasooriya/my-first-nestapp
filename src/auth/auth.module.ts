import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module.js';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy.js';
import { JwtStrategy } from './jwt.strategy.js';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'your-secret-key',
        signOptions: { expiresIn: '1h' },
      }),
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
