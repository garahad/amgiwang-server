import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Categories } from './Categories';

// 왜 난 여기 eslint 아래 에러 나지?
enum Importance {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
}

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.questions, { onDelete: 'CASCADE' })
  owner: User;

  @ManyToOne(() => Categories, (category) => category.questions, {
    onDelete: 'CASCADE',
  })
  category: Categories;

  @Column({ type: 'enum', enum: Importance })
  importance: Importance;

  @Column({
    type: 'text',
    nullable: true,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  questionContent: string;

  @Column({
    type: 'text',
    nullable: true,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  answer: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
