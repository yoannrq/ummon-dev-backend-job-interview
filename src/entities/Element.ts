import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Color } from "./Color";
import { Part } from "./Part";

@Entity("elements")
export class Element {
  @PrimaryColumn({ name: "element_id" })
  elementId: string;

  @Column({ name: "part_num" })
  partNum: string;

  @Column({ name: "color_id" })
  colorId: string;

  @Column({ name: "design_id" })
  designId: string;

  @ManyToOne(() => Color)
  @JoinColumn({ name: "color_id", referencedColumnName: "id" })
  color: Color;

  @ManyToOne(() => Part)
  @JoinColumn({ name: "part_num", referencedColumnName: "part_num" })
  part: Part;
}
