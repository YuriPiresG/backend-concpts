import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { Shopcart } from './shopcart/entities/shopcart.entity';
import { Shopcart_product } from './shopcart/entities/shopcart_product.entity';
import { ShopcartModule } from './shopcart/shopcart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'concptsDb',
      entities: [Shopcart, Product, Shopcart_product],
      synchronize: false,
    }),
    ShopcartModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
