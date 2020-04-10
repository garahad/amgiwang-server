import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { User } from './User';
import { Categories } from './Categories';

export enum Importance {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
}

@Entity()
export class Questions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.questions)
  owner: User;

  @ManyToOne(() => Categories, (category) => category.questions)
  category: Categories;

  @Column({ type: 'enum', enum: Importance })
  importance: string;

  @Column()
  question: string;

  @Column()
  answer: string;
}
