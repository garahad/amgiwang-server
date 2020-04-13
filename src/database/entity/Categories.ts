import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Questions } from './Questions';

@Entity()
export class Categories extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  domain: string;

  @Column()
  subdomain: string;

  @OneToMany(() => Questions, (question) => question.category)
  questions: Questions[];
}
