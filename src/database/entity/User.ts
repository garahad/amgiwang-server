import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Questions } from './Questions';

@Entity()
export class User extends BaseEntity {
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

  @OneToMany(() => Questions, (question) => question.owner)
  questions: Questions[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
