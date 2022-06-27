import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryColumn, Index } from 'typeorm';

import { Service } from './service.model';

@Entity('user')
export class User {
  @PrimaryColumn()
  public id!: string;

  @Index()
  @Column()
  public email!: string;

  @Index()
  @Column()
  public username!: string;

  @Column()
  public password!: string;

  @Column()
  public secureCode!: string;

  @Column({ nullable: true })
  @Exclude()
  refresh_token?: string;

  @OneToMany(() => Service, (service) => service.user)
  public services!: Service[];
}
