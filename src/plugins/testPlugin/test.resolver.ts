import { Resolver, Query, Mutation, Subscription, Args } from "@nestjs/graphql";
import { testService } from "./test.service";
import { Ctx, RequestContext } from "@vendure/core";

@Resolver()
export class testResolver {
  constructor(private testService: testService) {}

  @Query()
  test(@Ctx() requestContext: RequestContext) {
    return this.testService.testCreate(requestContext);
  }

  @Query()
  createSellerr(@Ctx() requestContext: RequestContext) {
    return this.testService.createSeller(requestContext);
  }
}
