import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService){}


  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({data: createCategoryDto})
  }

  findAll() {
    return this.prisma.categories.findMany({})
  }

  findOne(id: string) {
    return this.prisma.categories.findUnique({where: {id:id}})
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
