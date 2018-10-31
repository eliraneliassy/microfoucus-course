export interface Item {
    imageUrl: string;
    description: string;
    price: number;
}

export class Item2 {

    imageUrl: string;
    description: string;
    price: number;
    constructor(imageUrl: string, description: string, price: number) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}
