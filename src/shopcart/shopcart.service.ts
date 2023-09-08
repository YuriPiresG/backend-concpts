import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateShopcartDto } from './dto/create-shopcart.dto';
import { UpdateShopcartDto } from './dto/update-shopcart.dto';
import { Shopcart } from './entities/shopcart.entity';
import { Shopcart_product } from './entities/shopcart_product.entity';

@Injectable()
export class ShopcartService {
  constructor(
    @InjectRepository(Shopcart)
    private shopcartRepository: Repository<Shopcart>,
    private productService: ProductService,
    @InjectRepository(Shopcart_product)
    private shopcartProductRepository: Repository<Shopcart_product>,
  ) {}
  async create(createShopcartDto: CreateShopcartDto) {
    const productFound = await this.productService.findOne(
      createShopcartDto.productId,
    );
    await this.shopcartRepository.save({
      shopcart_products: [
        {
          product: productFound,
        },
      ],
    });
    return await this.shopcartProductRepository.save({
      product: productFound,
      quantidade: createShopcartDto.quantidade,
      shopcart: await this.shopcartRepository.findOne({
        relations: ['shopcart_products'],
      }),
    });
  }

  async findAll() {
    return await this.shopcartRepository.find({
      relations: ['shopcart_products'],
    });
  }

  // async findAll() {
  //   return await this.shopcartProductRepository.find({
  //     relations: ['product', 'shopcart'],
  //   });
  // }

  async findOne(id: number) {
    return await this.shopcartRepository.findOne({ where: { index: id } });
  }

  async update(id: number, updateShopcartDto: UpdateShopcartDto) {
    return await this.shopcartProductRepository.update(id, updateShopcartDto);
  }

  async remove(id: number) {
    return await this.shopcartRepository.delete(id);
  }

  async deleteAll() {
    await this.shopcartRepository.clear();
    return 'Shopcart cleared!';
  }
}
