import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;

  @Column()
  password: string;
  @AfterInsert()
  logInserted() {
    console.log('New User added with id', this.id);
  }
  @AfterRemove()
  logRemoved() {
    console.log('User deleted with id', this.id);
  }
  @AfterUpdate()
  logUpdated() {
    console.log('User updated with id', this.id);
  }
}
