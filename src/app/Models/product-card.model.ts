export class ProductCardModel {
    id: number
    name: string
    imageUrl: string
    price: number
    updatedOn: string
    status: string
    metadata: ProductMetadata
}

export class ProductMetadata
{
    specifications: string
    description: string
}