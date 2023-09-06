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

  async findAll() {
    return await this.shopcartRepository.find({ relations: ['product'] });
  }

  async findOne(id: number) {
    return await this.shopcartRepository.findOne({ where: { index: id } });
  }

  async update(id: number, updateShopcartDto: UpdateShopcartDto) {
    return await this.shopcartRepository.update(id, updateShopcartDto);
  }

  async remove(id: number) {
    return await this.shopcartRepository.delete(id);
  }

  async deleteAll() {
    await this.shopcartRepository.clear();
    return 'Shopcart cleared!';
  }
}
