import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '用户账号' })
  account_name: string;

  @Column({ comment: '真实姓名' })
  real_name: string;

  @Column({ comment: '密码' })
  passwd: string;

  @Column({ comment: '密码盐' })
  passwd_salt: string;

  @Column({ comment: '手机号码', default: '0' })
  mobile: string;

  @Column({
    comment:
      '用户角色：0-超级管理员|1-管理员|2-开发&测试&运营|3-普通用户（只能查看）',
    default: 3,
  })
  role: number;

  @Column({ comment: '状态：0-失效|1-有效|2-删除', default: 0 })
  user_status: number;

  @CreateDateColumn({ comment: '创建时间' })
  create_time: string;

  @UpdateDateColumn({ comment: '最近一次修改时间' })
  update_time: string;
}
