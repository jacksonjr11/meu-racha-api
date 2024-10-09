import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { PersonEntity } from './person.entity';

enum TypeUserEnum {
  COMMOM = 'COMMON',
  ESTABLISHMENT = 'ESTABLISHMENT',
}

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
  personId: PersonEntity;

  @Column({ name: 'username', type: 'varchar' })
  username: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'type', type: 'varchar' })
  type: TypeUserEnum;
}
