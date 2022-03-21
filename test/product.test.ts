import { Aldi, Product } from '../src';

describe('Aldi Product', () => {
    it('should return a Product object', () => {
        const client = new Aldi();
        expect(client.product()).toBeDefined();
        expect(client.product()).toBeInstanceOf(Product);
    });

    describe('getProductFromId', () => {
        it('should have been called with correct parameters', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.product().getProductFromId('products/1/1');
            expect(getMock).toHaveBeenCalledWith('articles/products/1/1.json', undefined);
        });
    });

    describe('getProductsFromName', () => {
        it('should have been called with correct parameters', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.product().getProductsFromName('test');
            expect(getMock).toHaveBeenCalledWith('articlesearch/test.json', undefined);
        });
    });
});
