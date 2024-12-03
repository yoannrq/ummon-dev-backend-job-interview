import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  JoinColumn,
} from "typeorm";
import { Element } from "./Element";
import { PartCategory } from "./PartCategory";

@Entity("parts")
export class Part {
  @PrimaryColumn({ name: "part_num" })
  partNum: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "part_cat_id" })
  categoryId: string;

  @Column({ name: "part_material" })
  material: string;

  @OneToMany(() => Element, (element) => element.part)
  elements: Element[];

  @ManyToOne(() => PartCategory)
  @JoinColumn({ name: "part_cat_id", referencedColumnName: "id" })
  category: PartCategory;

  //TODO part_relantionships
}
