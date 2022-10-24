import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductsService } from "./products.service";



@Module({
    controllers:[],
    providers:[ProductsService],
    imports:[PrismaModule]
})
export class ProductsModule{}