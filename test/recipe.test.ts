import { Aldi, Recipe } from '../src';

describe('Aldi Recipe', () => {
    it('should return a Recipe object', () => {
        const client = new Aldi();
        expect(client.recipe()).toBeDefined();
        expect(client.recipe()).toBeInstanceOf(Recipe);
    });

    describe('getRecipeFromId', () => {
        it('should have been called with correct parameters', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.recipe().getRecipeFromId('rezepte/1/1');
            expect(getMock).toHaveBeenCalledWith('recipedetail/rezepte/1/1.json', undefined);
        });
    });

    describe('getFeaturedRecipes', () => {
        it('should have been called with default parameters', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.recipe().getFeaturedRecipes();
            expect(getMock).toHaveBeenCalledWith('recipes/size=20.json', undefined);
        });

        it('should have been called with provided options', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.recipe().getFeaturedRecipes({
                amount: 5
            });
            expect(getMock).toHaveBeenCalledWith('recipes/size=5.json', undefined);
        });
    });

    describe('getRecipesFromName', () => {
        it('should have been called with correct parameters', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.recipe().getRecipesFromName('test');
            expect(getMock).toHaveBeenCalledWith('recipesearch/test.json', undefined);
        });
    });
});
