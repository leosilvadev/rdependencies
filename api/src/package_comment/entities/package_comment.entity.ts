import { Package } from "src/package/entities/package.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'package_comments'})
export class PackageComment {


    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    text: string;

    @ManyToOne(() => Package, (pkg) => pkg.comments)
    @JoinColumn({ name: 'package_id' })
    package: Package;
}
