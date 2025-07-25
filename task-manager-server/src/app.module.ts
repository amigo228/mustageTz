import { Module } from '@nestjs/common';
import { TasksService} from "./tasks/tasks.service";
import { TasksController} from "./tasks/tasks.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "./tasks/task.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'task_manager',
        entities: [Task],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([Task]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
