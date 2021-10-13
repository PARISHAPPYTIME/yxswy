import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './logical/user/user.module';
import { AuthModule } from './logical/auth/auth.module';
import { UserController } from './logical/user/user.controller';
import { SynchronousModule } from './logical/synchronous/synchronous.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    AuthModule,
    SynchronousModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: '20210908',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
