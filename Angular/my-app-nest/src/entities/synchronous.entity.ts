import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SynchronousEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn({ comment: '创建时间' })
  create_time: string;

  @UpdateDateColumn({ comment: '最近一次修改时间' })
  update_time: string;
}
