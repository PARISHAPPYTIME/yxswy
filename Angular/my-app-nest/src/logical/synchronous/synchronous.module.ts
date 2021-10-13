import { Module } from '@nestjs/common';
import { SynchronousController } from './synchronous.controller';
import { SynchronousService } from './synchronous.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SynchronousEntity } from '../../entities/synchronous.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SynchronousEntity])],
  controllers: [SynchronousController],
  providers: [SynchronousService],
})
export class SynchronousModule {}
