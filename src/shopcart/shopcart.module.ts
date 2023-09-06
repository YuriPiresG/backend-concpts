import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopcartService } from './shopcart.service';
import { ShopcartController } from './shopcart.controller';
import { Shopcart } from './entities/shopcart.entity';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Shopcart]), ProductModule], // Include the ProductModule in the imports array
  controllers: [ShopcartController],
  providers: [ShopcartService],
  exports: [ShopcartService],
})
export class ShopcartModule {}
