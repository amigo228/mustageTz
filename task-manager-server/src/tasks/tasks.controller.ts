import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { TasksService } from "./tasks.service";
import { Task } from "./task.entity";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.findOne(id);
    }

    @Post()
    create(@Body() task: Partial<Task>): Promise<Task> {
        return this.tasksService.create(task);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() task: Partial<Task>): Promise<Task> {
        return this.tasksService.update(id, task);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.tasksService.remove(id);
    }
}
