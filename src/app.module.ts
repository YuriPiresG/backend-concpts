import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ShopcartModule } from './shopcart/shopcart.module';
import { Product } from './product/entities/product.entity';
import { Shopcart } from './shopcart/entities/shopcart.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'concptsDb',
      entities: [Shopcart, Product],
      synchronize: false,
    }),
    ShopcartModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
