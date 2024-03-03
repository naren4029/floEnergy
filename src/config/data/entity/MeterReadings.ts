/**File Desc: Contains entity details to be added for database */

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MeterReadings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10, nullable: false })
  nmi: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  timestamp: Date;

  @Column({ type: "float", nullable: false })
  consumption: number;

  @Column({ nullable: true })
  interval_minutes: number;
}
