import { VendurePlugin, PluginCommonModule } from "@vendure/core";
import { testService } from "./test.service";
import { testResolver } from "./test.resolver";
import { adminApiExtension } from "./api-ext";

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [testService],
  adminApiExtensions: {
    schema: adminApiExtension,
    resolvers: [testResolver],
  },
})
export class TestPlugin {}
