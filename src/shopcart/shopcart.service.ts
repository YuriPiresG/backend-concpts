import { Injectable } from '@nestjs/common';
import { CreateShopcartDto } from './dto/create-shopcart.dto';
import { UpdateShopcartDto } from './dto/update-shopcart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shopcart } from './entities/shopcart.entity';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class ShopcartService {
  constructor(
    @InjectRepository(Shopcart)
    private shopcartRepository: Repository<Shopcart>,
    private productService: ProductService,
  ) {}
  async create(createShopcartDto: CreateShopcartDto) {
    const productFound = await this.productService.findOne(
      createShopcartDto.productId,
    );
    return await this.shopcartRepository.save({
      product: productFound,
      quantidade: createShopcartDto.quantidade,
      precoFinal: productFound.preco * createShopcartDto.quantidade,
    });
  }

  findAll() {
    return this.shopcartRepository.find();
  }

  findOne(id: number) {
    return this.shopcartRepository.findOne({ where: { index: id } });
  }

  update(id: number, updateShopcartDto: UpdateShopcartDto) {
    return this.shopcartRepository.update(id, updateShopcartDto);
  }

  remove(id: number) {
    return this.shopcartRepository.delete(id);
  }
}
