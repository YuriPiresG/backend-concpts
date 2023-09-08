import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopcartService } from './shopcart.service';
import { ShopcartController } from './shopcart.controller';
import { Shopcart } from './entities/shopcart.entity';
import { ProductModule } from '../product/product.module';
import { Shopcart_product } from './entities/shopcart_product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shopcart, Shopcart_product]),
    ProductModule,
  ], // Include the ProductModule in the imports array
  controllers: [ShopcartController],
  providers: [ShopcartService],
  exports: [ShopcartService],
})
export class ShopcartModule {}
