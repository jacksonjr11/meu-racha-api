import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('racha')
export class RachaEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'nome', type: 'varchar' })
  name: string;
}
