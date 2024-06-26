import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'packages'})
export class Package {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    headline: string;

    @Column()
    version: string;

    @Column()
    license: string;

    @Column({type: 'text', array: true})
    dependencies: string[];

    @Column({type: 'text', array: true})
    imports: string[];

    @Column({type: 'text', array: true})
    authors: string[];

    @Column({name: 'created_at'})
    createdAt: Date;

    @Column({ type: 'text' })
    description: string;

}