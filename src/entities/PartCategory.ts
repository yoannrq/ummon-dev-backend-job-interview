import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("part_categories")
export class PartCategory {
  @PrimaryColumn("bigint", { name: "id" })
  id: string;

  @Column({ name: "name" })
  name: string;
}
