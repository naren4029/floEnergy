/**File Desc: Contains configuration constants */

import { type DataSourceOptions } from "typeorm/data-source/DataSourceOptions";
import type { PathInfoTypes } from "./types";
import { MeterReadings } from "../data/entity/MeterReadings";

export const pathInfo: PathInfoTypes = {
  directory: "NEM12_Files",
  file: "NEM12_Test_1_Million_Records.csv",
};

export const encoding = "utf8";

const { env } = process;

const localEnv: DataSourceOptions = {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Welcome123",
  database: "postgres",
  type: "postgres",
};

export const dbConfig: DataSourceOptions = {
  type: "postgres",
  host: env.host || localEnv.host,
  port: Number(env.port) || localEnv.port,
  username: env.DB_Username || localEnv.username,
  password: env.DB_Password || localEnv.password,
  database: env.DB || localEnv.database,
  synchronize: true,
  logging: ["error"],
  entities: [MeterReadings],
  subscribers: [],
  migrations: [],
};
