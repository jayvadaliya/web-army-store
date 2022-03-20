import { ProductCardModel } from "../Models/product-card.model";
import { ProductResponse } from "../Models/product-response.model";

export class ProductCardMapper {
    mapToModel(response: ProductResponse)
    {
        let model = new ProductCardModel;
        model.id = response.id;
        model.name = response.name;
        model.imageUrl = response.imageUrl;

        return model;
    }
}