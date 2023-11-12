import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Recipe } from "./entity/Recipe";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "recetas-comidas-db",
    // logging: true, // muestra peticiones a la bd
    synchronize: true,
    entities: [User, Recipe],
});