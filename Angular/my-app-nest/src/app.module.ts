import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './logical/user/user.module';
import { AuthModule } from './logical/auth/auth.module';
import { UserController } from './logical/user/user.controller';
import { SynchronousModule } from './logical/synchronous/synchronous.module';

@Module({
  imports: [UserModule, AuthModule, SynchronousModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
