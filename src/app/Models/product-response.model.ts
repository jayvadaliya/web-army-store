export class ProductResponse 
{
    id: number
    name: string
    price: number
    imageUrl: string
    updatedOn: Date
    status: string
    metadate: ProductMetadata
}

export class ProductMetadata
{
    specification: string
    description: string
}