import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Type } from 'class-transformer';

import { User } from './user.model';

@Entity('service')
export class Service {
  @PrimaryColumn()
  public id!: string;

  @Column()
  public name!: string;

  @Column({ nullable: true })
  public username?: string;

  @Column({ nullable: true })
  public email?: string;

  @Column()
  public password!: string;

  @Column()
  public phoneNumber!: string;

  @Column({ nullable: true })
  public twofacor?: boolean;

  @Column()
  @Type(() => Date)
  public creationTime!: Date;

  @Column()
  @Type(() => Date)
  public updateTime!: Date;

  @ManyToOne(() => User, (user) => user)
  public user!: User;
}
