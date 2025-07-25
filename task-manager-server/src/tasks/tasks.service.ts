import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./task.entity";
import {Repository} from "typeorm";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) {}

    findAll(): Promise<Task[]> {
        return this.tasksRepository.find();
    }

    async findOne(id: number): Promise<Task> {
        const task = await this.tasksRepository.findOneBy({ id });
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }

    create(task: Partial<Task>): Promise<Task> {
        const newTask = this.tasksRepository.create(task);
        return this.tasksRepository.save(newTask);
    }

    async update(id: number, task: Partial<Task>): Promise<Task> {
        await this.tasksRepository.update(id, task);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.tasksRepository.delete(id);
    }
}
