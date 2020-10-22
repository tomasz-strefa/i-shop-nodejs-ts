import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as productController from "./controllers/ProductController";

// uruchomienie aplikacji:
// npm run tsc
// node server/server.js

const app: express.Application = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/i-shop/products', productController.getAllProducts);
app.post('/api/i-shop/order', productController.checkRequest);

app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});
