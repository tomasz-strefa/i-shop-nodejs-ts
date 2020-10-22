export class Product {
    productId: number;
    title: string;
    description: string;
    image: string;
    price: number;

    counter: number;

    constructor() {
        this.productId = 0;
        this.title = '';
        this.description = '';
        this.image = '';
        this.price = 0;
        this.counter = 0;
    }
}
