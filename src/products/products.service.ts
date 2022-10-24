import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from "./dto";



//only for admin(Admin Guard)
@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService){}
    create(createProductDto: CreateProductDto){
        return 'new products'
    }
}