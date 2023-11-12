import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    ingredients: string;

    @Column()
    preparation: string;

    @Column()
    cookingTime: string;

    @Column()
    imageUrl: string; //campo para la URL de la imagen de la comida

    @Column()
    servings: number; //campo para la cantidad de personas que pueden comer

}
