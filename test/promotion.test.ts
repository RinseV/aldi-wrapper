import { Aldi, Promotion } from '../src';

describe('Aldi Promotion', () => {
    it('should return a Promotion object', () => {
        const client = new Aldi();
        expect(client.promotion()).toBeDefined();
        expect(client.promotion()).toBeInstanceOf(Promotion);
    });

    describe('getPromotionFromId', () => {
        it('should have been called with correct parameters', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.promotion().getPromotionFromId('wk1_Vanaf_Zaterdag_01-01');
            expect(getMock).toHaveBeenCalledWith('promotions/wk1_Vanaf_Zaterdag_01-01.json', undefined);
        });
    });

    describe('getCurrentPromotions', () => {
        it('should have been called with correct parameters', async () => {
            const client = new Aldi();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.promotion().getCurrentPromotions();
            expect(getMock).toHaveBeenCalledWith('promotions.json', undefined);
        });
    });
});
