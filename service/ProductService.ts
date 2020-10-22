import { ProductRepository } from "../repository/ProductRepository";
import { Product } from "../model/Product";
import { Order } from "../model/Order";

export class ProductService {
    productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    checkRequest(order: Order): Boolean {
        console.log('order: ', order);

        let resultValid = this.checkProduct(order.products);
        let checkSize = this.checkSize(order);
        let checkPrice = this.checkPrice(order);
        
        return resultValid && checkSize && checkPrice;
    }

    checkPrice(order: Order): Boolean {
        var checkPrice = false;
        var sumPrice = 0.0;
        order.products.forEach((el: { price: number; counter: number; }) => {
            sumPrice += (el.price * el.counter);
        });
    
        if(sumPrice === order.productsPrice) {
            checkPrice = true;
        }

        return checkPrice;
    }

    checkSize(order: Order): Boolean {
        var counterProducts = 0;
        order.products.forEach((el: { counter: number; }) => {
            counterProducts += el.counter;
        });
    
        var checkSize = false;
        if(counterProducts === order.productsCounter) {
            checkSize = true;
        }

        return checkSize;
    }

    checkProduct(products: Array<Product>): Boolean {

        var resultValid = false;

        products.forEach((el: any) => {
    
            if(this._isValidProduct(el)) {
                resultValid = true;
            }
        }, this);

        return resultValid;
    }

    async _isValidProduct(productDTO: Product) {
        var product: Product = await this.productRepository.findOne(productDTO.productId);
        
        return product.price === productDTO.price;
    }

    async getProducts(): Promise<Array<Product>>  {
        return await this.productRepository.getProducts();
    }

}