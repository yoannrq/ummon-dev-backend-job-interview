import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("colors")
export class Color {
  @PrimaryColumn("bigint", { name: "id" })
  id: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "rgb" })
  rgb: string;

  @Column({ name: "is_trans" })
  isTransparent: boolean;
}
