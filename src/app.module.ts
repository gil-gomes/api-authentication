import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigFactory } from './database/connection';

@Module({
  imports: [
    AuthModule, 
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeOrmConfigFactory()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
