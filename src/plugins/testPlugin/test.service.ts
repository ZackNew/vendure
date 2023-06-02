import {
  ProductService,
  RequestContext,
  SellerService,
  TransactionalConnection,
  User,
} from "@vendure/core";
import { Injectable } from "@nestjs/common";

@Injectable()
export class testService {
  constructor(
    private connection: TransactionalConnection,
    private productService: ProductService,
    private sellerService: SellerService
  ) {}
  testCreate(ctx: RequestContext) {
    return this.productService.findAll(ctx);
  }
  async createSeller(ctx: RequestContext) {
    const sellerInput = {
      name: "pink panther",
    };
    const seller = await this.sellerService.create(ctx, sellerInput);
    console.log("seller", seller);
    return "created";
  }
}
