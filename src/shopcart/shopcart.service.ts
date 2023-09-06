import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateShopcartDto } from './dto/create-shopcart.dto';
import { UpdateShopcartDto } from './dto/update-shopcart.dto';
import { Shopcart } from './entities/shopcart.entity';

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
