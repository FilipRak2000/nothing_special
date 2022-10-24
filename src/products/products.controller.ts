import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";






@Controller('products')
export class ProductsController {
    constructor(private readonly productsservies: ProductsService){}
    //only for admin(Admin Guard)
    @Post('new')
    create(@Body)

}