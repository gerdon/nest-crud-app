import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'public' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
