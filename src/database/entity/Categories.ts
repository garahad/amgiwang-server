import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Questions } from './Questions';
import { User } from './User';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.questions)
  user: User;

  @Column({ type: 'varchar', length: 255 })
  domain: string;

  @Column({ type: 'varchar', length: 255 })
  subdomain: string;

  @OneToMany(() => Questions, (question) => question.category)
  questions: Questions[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
