import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quote {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public author: string;

  @Column()
  public philosophy: string;

  @Column()
  public quote: string;

  public constructor(author: string, philosophy: string, quote: string) {
    this.author = author;
    this.philosophy = philosophy;
    this.quote = quote;
  }

}
