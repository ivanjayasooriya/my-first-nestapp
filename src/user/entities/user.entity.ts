import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; // stores the HASHED password, never plaintext

  @Column({ type: 'simple-array', default: 'user' })
  roles: string[];
}
