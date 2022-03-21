import { AdditionalRequestOptions } from '../aldi';
import { AldiObject } from '../base/aldiObject';
import { ExtendedRecipeModel, RecipeQueryModel } from './recipeModel';

export class Recipe extends AldiObject {
    /**
     * Gets recipe from ID
     * @param recipeId Recipe ID, formatted as "rezepte/{category}/{slug}.json"
     */
    async getRecipeFromId(
        recipeId: string,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<ExtendedRecipeModel> {
        return await this.aldi.get(`recipedetail/${recipeId}.json`, additionalRequestOptions);
    }

    /**
     * Get recipes featured on the front page
     * @param amount Amount of recipes to get (default 20)
     */
    async getFeaturedRecipes(
        amount?: number,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<RecipeQueryModel> {
        const size = amount || 20;
        return await this.aldi.get(`recipes/size=${size}.json`, additionalRequestOptions);
    }

    /**
     * Get recipes from given recipe name (will return all of them)
     * @param recipeName Recipe name to search for
     */
    async getRecipesFromName(
        recipeName: string,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<RecipeQueryModel> {
        return await this.aldi.get(`recipesearch/${recipeName}.json`, additionalRequestOptions);
    }
}
