import { Request, Response } from "express";
import { Recipe } from "../entity/Recipe";

interface RecipeBody {
    name: string;
    description: string;
    ingredients: string;
    preparation: string;
    cookingTime: string;
    imageUrl: string;
    servings: number;
}

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find();
        return res.json(recipes);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getRecipe = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findOneBy({ id: parseInt(id) });

        if (!recipe) return res.status(404).json({ message: "Recipe not found" });

        return res.json(recipe);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createRecipe = async (req: Request, res: Response) => {
    const { name, description, ingredients, preparation, cookingTime, imageUrl, servings } = req.body as RecipeBody;

    try {
        const recipe = new Recipe();
        recipe.name = name;
        recipe.description = description;
        recipe.ingredients = ingredients;
        recipe.preparation = preparation;
        recipe.cookingTime = cookingTime;
        recipe.imageUrl = imageUrl;
        recipe.servings = servings;

        await recipe.save();

        return res.json(recipe);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const recipe = await Recipe.findOneBy({ id: parseInt(id) });

        if (!recipe) return res.status(404).json({ message: "Recipe not found" });

        await Recipe.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await Recipe.delete({ id: parseInt(id) });

        if (result.affected === 0) return res.status(404).json({ message: "Recipe not found" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
