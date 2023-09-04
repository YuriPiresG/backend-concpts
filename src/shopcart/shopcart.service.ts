import { Injectable } from '@nestjs/common';
import { CreateShopcartDto } from './dto/create-shopcart.dto';
import { UpdateShopcartDto } from './dto/update-shopcart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shopcart } from './entities/shopcart.entity';

@Injectable()
export class ShopcartService {
  constructor(
    @InjectRepository(Shopcart)
    private shopcartRepository: Repository<Shopcart>,
  ) {}
  create(createShopcartDto: CreateShopcartDto) {
    return this.shopcartRepository.save(createShopcartDto);
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
