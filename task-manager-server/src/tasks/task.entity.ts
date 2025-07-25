import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
     id: number;

    @Column()
    title: string;

    @Column({type: 'text'})
    description: string;

    @Column({default: false})
    status: boolean;

}