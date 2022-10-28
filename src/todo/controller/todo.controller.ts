import { Todo } from '@prisma/client';
import { TodoService } from './../service/todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async fetchAllTodos(): Promise<Todo[]> {
    return this.todoService.fetchAllTodos();
  }

  @Get(':id')
  async fetchTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.fetchTodoItem(id);
  }

  @Delete(':id')
  async deleteTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.deleteTodoItem(id);
  }

  @Post()
  async addTodoItem(@Body() data: Todo): Promise<Todo> {
    return this.todoService.addTodoItem(data);
  }

  @Put(':id')
  async updateTodoItem(
    @Param('id') id: number,
    @Body() data: Todo,
  ): Promise<Todo | null> {
    return this.todoService.updateTodoItem(
      id,
      data.title,
      data.content,
      data.is_done,
    );
  }
}
