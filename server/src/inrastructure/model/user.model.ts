import { Column, Entity, OneToMany, PrimaryColumn, Index } from 'typeorm';

import { Service } from './service.model';

@Entity('user')
export class User {
  @PrimaryColumn()
  public id!: string;

  @Index()
  @Column()
  public email!: string;

  @Column()
  public username!: string;

  @Column()
  public password!: string;

  @Column()
  public secureCode!: string;

  @OneToMany(() => Service, (service) => service.user)
  public services!: Service[];
}
