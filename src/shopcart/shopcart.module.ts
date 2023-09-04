import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopcartService } from './shopcart.service';
import { ShopcartController } from './shopcart.controller';
import { Shopcart } from './entities/shopcart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shopcart])],
  controllers: [ShopcartController],
  providers: [ShopcartService],
})
export class ShopcartModule {}
