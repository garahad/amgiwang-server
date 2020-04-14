import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Categories } from './Categories';

// 왜 난 여기 eslint 아래 에러 나지? export는 왜 붙여야하지?
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
  importance: Importance;

  @Column()
  questionContent: string;

  @Column()
  answer: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
