/**File Desc: Data souce for database initialisation */

import { DataSource } from "typeorm/data-source/DataSource";
import { dbConfig } from "../constants";

export const appDataSource = new DataSource(dbConfig);

export const initialize = async () => await appDataSource.initialize();
