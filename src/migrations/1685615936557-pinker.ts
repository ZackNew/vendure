import {MigrationInterface, QueryRunner} from "typeorm";

export class pinker1685615936557 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `FK_6901d8715f5ebadd764466f7bde` ON `order_line`", undefined);
        await queryRunner.query("DROP INDEX `FK_73a78d7df09541ac5eba620d181` ON `order`", undefined);
        await queryRunner.query("ALTER TABLE `seller` ADD `customFieldsConnectedaccountid` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `channel` ADD CONSTRAINT `FK_af2116c7e176b6b88dceceeb74b` FOREIGN KEY (`sellerId`) REFERENCES `seller`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `stock_movement` ADD CONSTRAINT `FK_a2fe7172eeae9f1cca86f8f573a` FOREIGN KEY (`stockLocationId`) REFERENCES `stock_location`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `product_variant_price` ADD CONSTRAINT `FK_e6126cd268aea6e9b31d89af9ab` FOREIGN KEY (`variantId`) REFERENCES `product_variant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `order_line` ADD CONSTRAINT `FK_6901d8715f5ebadd764466f7bde` FOREIGN KEY (`sellerChannelId`) REFERENCES `channel`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `order_line` ADD CONSTRAINT `FK_dc9ac68b47da7b62249886affba` FOREIGN KEY (`shippingLineId`) REFERENCES `shipping_line`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `order` ADD CONSTRAINT `FK_73a78d7df09541ac5eba620d181` FOREIGN KEY (`aggregateOrderId`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `address` ADD CONSTRAINT `FK_d87215343c3a3a67e6a0b7f3ea9` FOREIGN KEY (`countryId`) REFERENCES `region`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `address` DROP FOREIGN KEY `FK_d87215343c3a3a67e6a0b7f3ea9`", undefined);
        await queryRunner.query("ALTER TABLE `order` DROP FOREIGN KEY `FK_73a78d7df09541ac5eba620d181`", undefined);
        await queryRunner.query("ALTER TABLE `order_line` DROP FOREIGN KEY `FK_dc9ac68b47da7b62249886affba`", undefined);
        await queryRunner.query("ALTER TABLE `order_line` DROP FOREIGN KEY `FK_6901d8715f5ebadd764466f7bde`", undefined);
        await queryRunner.query("ALTER TABLE `product_variant_price` DROP FOREIGN KEY `FK_e6126cd268aea6e9b31d89af9ab`", undefined);
        await queryRunner.query("ALTER TABLE `stock_movement` DROP FOREIGN KEY `FK_a2fe7172eeae9f1cca86f8f573a`", undefined);
        await queryRunner.query("ALTER TABLE `channel` DROP FOREIGN KEY `FK_af2116c7e176b6b88dceceeb74b`", undefined);
        await queryRunner.query("ALTER TABLE `seller` DROP COLUMN `customFieldsConnectedaccountid`", undefined);
        await queryRunner.query("CREATE INDEX `FK_73a78d7df09541ac5eba620d181` ON `order` (`aggregateOrderId`)", undefined);
        await queryRunner.query("CREATE INDEX `FK_6901d8715f5ebadd764466f7bde` ON `order_line` (`sellerChannelId`)", undefined);
   }

}
