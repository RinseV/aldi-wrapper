import { AdditionalRequestOptions } from '../aldi';
import { AldiObject } from '../base/aldiObject';
import { PromotionQueryModel, SinglePromotionModel } from './promotionModel';

export class Promotion extends AldiObject {
    /**
     * Gets information from given promotion ID
     * @param promotionId Promotion ID, formatted as "wk{nr}_{start_day}_{start_date}" (from promotionId)
     */
    async getPromotionFromId(
        promotionId: string,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<SinglePromotionModel> {
        return await this.aldi.get(`promotions/${promotionId}.json`, additionalRequestOptions);
    }

    /**
     * Gets currently active promotions
     */
    async getCurrentPromotions(additionalRequestOptions?: AdditionalRequestOptions): Promise<PromotionQueryModel> {
        return await this.aldi.get('promotions.json', additionalRequestOptions);
    }
}
