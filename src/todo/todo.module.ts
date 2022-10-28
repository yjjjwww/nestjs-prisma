import { PrismaService } from './../prisma.service';
import { TodoController } from './controller/todo.controller';
import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
})
export class TodoModule {}
