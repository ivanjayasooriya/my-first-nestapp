import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service.js';
import { CustomersController } from './customers.controller.js';
import { Customer } from './entities/customer.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]), // Import the Customer entity for TypeORM
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
