import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User extends BaseEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
