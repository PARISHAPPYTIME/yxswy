import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize';
import sequelize from '../../database/sequelize';

@Injectable()
export class SynchronousService {
  async findSynchronous(userId: string) {
    const sql = `
    SELECT
      content
    FROM
      synchronous
    WHERE
      user_id = '${userId}'
  `;
    try {
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: false, // 是否将 SQL 语句打印到控制台，默认为 true
      });
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
        synchronous
      WHERE
        user_id = '${userId}'
    `;
    const res = await sequelize.query(sql, {
      type: Sequelize.QueryTypes.SELECT, // 查询方式
      raw: true, // 是否使用数组组装的方式展示结果
      logging: false, // 是否将 SQL 语句打印到控制台，默认为 true
    });
    if (res && res.length > 0) {
      content.replace(/'/g, '"');
      const sql = `UPDATE synchronous SET content = '${content}' WHERE user_id = '${userId}'`;
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.UPDATE, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: false, // 是否将 SQL 语句打印到控制台，默认为 true
      });
      return {
        code: 200,
        message: 'success',
        data: res,
      };
    } else {
      const sql = `INSERT INTO synchronous (user_id, content) VALUES ('${userId}', '${content})')`;
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.INSERT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: false, // 是否将 SQL 语句打印到控制台，默认为 true
      });
      return {
        code: 200,
        message: 'success',
        data: res,
      };
    }
  }
}
