import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Questions } from './Questions';
import { Categories } from './Categories';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  provider: string;

  @Column()
  snsId: string;

  @OneToMany(() => Categories, (category) => category.user)
  categories: Categories[];

  @OneToMany(() => Questions, (question) => question.owner)
  questions: Questions[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
