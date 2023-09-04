import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';
import { ShopcartModule } from './shopcart/shopcart.module';
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
      entities: [Product, Shopcart],
      synchronize: false,
    }),
    ProductModule,
    ShopcartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
