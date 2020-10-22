import { ProductService } from "../service/ProductService";
import { Response, Request } from "express";

let productService = new ProductService();

export async function getAllProducts (req: Request, res: Response) {
    // lista produktow

    res.json(await productService.getProducts());
    res.end();
}

export function checkRequest (req: Request, res: Response) {
    // realizacja zamowienia oraz jego weryfikacja
    let result: Boolean = productService.checkRequest(req.body);
    console.log('result: ', result);
    res.writeHead(result ? 200 : 400);
    res.end();
}
