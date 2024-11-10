import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum TypeIdentityEnum {
  RG = 'RG',
  CPF = 'CPF',
  PASSPORT = 'PASSPORT',
}

@Entity('user')
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'birthdate', type: 'date' })
  birthdate: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'identity', type: 'varchar' })
  identity: string;

  @Column({ name: 'type_identity', type: 'varchar' })
  typeIdentity: TypeIdentityEnum;
}
