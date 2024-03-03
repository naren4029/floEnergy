/**File Desc: Contains entity CRUD details for Meter Readings entity */

import { DataSource } from "typeorm/data-source/DataSource";
import { MeterReadings } from "../../config/data/entity/MeterReadings";

export class InsertQuery {
  constructor(private readonly dataSource: DataSource) {}

  async insertMeterReadingData(data: MeterReadings) {
    const repository = this.dataSource.getRepository(MeterReadings);
    return repository.save(data);
  }
}
