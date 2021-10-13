// const productConfig = {
//   mysql: {
//     port: 3306,
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: '20210908', // 库名
//     connectionLimit: 10, // 连接限制
//   },
// };

// const localConfig = {
//   mysql: {
//     port: 3306,
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: '20210908', // 库名
//     connectionLimit: 10, // 连接限制
//   },
// };

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
// const config = process.env.NODE_ENV ? productConfig : localConfig;

const config = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
