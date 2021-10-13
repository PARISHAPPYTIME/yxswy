import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { SynchronousEntity } from '../../entities/synchronous.entity';

@Injectable()
export class SynchronousService {
  constructor(
    @InjectRepository(SynchronousEntity)
    private synchronousRepository: Repository<SynchronousEntity>,
  ) {}
  async findSynchronous(userId: string) {
    const sql = `
      SELECT
        content
      FROM
        synchronous_entity
      WHERE
        id = '${userId}'
    `;
    try {
      const res = await getManager().query(sql);
      return {
        code: 200,
        message: 'success',
        data: res[0],
      };
    } catch (error) {
      return {
        code: 200,
        message: 'success',
        data: void 0,
      };
    }
  }

  async createSynchronous(userId: string, content: string) {
    const sql = `
      SELECT
        content
      FROM
        synchronous_entity
      WHERE
      id = '${userId}'
    `;
    const res = await getManager().query(sql);
    if (res && res.length > 0) {
      content.replace(/'/g, '"');
      const sql = `UPDATE synchronous_entity SET content = '${content}' WHERE id = '${userId}'`;
      const res = await getManager().query(sql);
      return {
        code: 200,
        message: 'success',
        data: res,
      };
    } else {
      const sql = `INSERT INTO synchronous_entity (id, content) VALUES ('${userId}', '${content})')`;
      const res = await getManager().query(sql);
      return {
        code: 200,
        message: 'success',
        data: res,
      };
    }
  }
}
