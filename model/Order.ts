import { Product } from "./Product";

export class Order {
    products: Array<Product>;
    productsCounter: number;
    productsPrice: number;

    constructor() {
        this.products = [];
        this.productsCounter = 0;
        this.productsPrice = 0;
    }
}
