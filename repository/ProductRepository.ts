import { Product } from "../model/Product";
import { db } from "../config/DbConfig";

export class ProductRepository {

    constructor() {
        console.log("injection");
    }

    async getProducts(): Promise<Array<Product>>  {
        //(await db).run('DELETE FROM products WHERE productId = 9');

        /*(await db).exec('DROP TABLE products');
        (await db).exec('CREATE TABLE products (productId INTEGER, titlt TEXT, description TEXT, image TEXT, price INTEGER)');
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [1, 'Przejazd Porsche 911', 'Dostęp do 21 torów w całej Polsce.', 'http://dev-livecode.codenga.pl/portfolio-img/product_1.png', 12000]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [2, 'Skok ze spadochronem', 'Wykonaj niesamowity skok z samolotu - dostępnych jest 26 lokalizacji!', 'http://dev-livecode.codenga.pl/portfolio-img/product_2.png', 4500]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [3, 'Jazda OFF ROAD 4x4', 'Poczuj moc napędu 4x4 w najtrudniejszych warunkach.', 'http://dev-livecode.codenga.pl/portfolio-img/product_3.png', 1000]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [4, 'Skok na bungee', 'Zawsze chciałeś spróbować skoku na bungee? Teraz masz okazje. Dostępnych jest 18 lokalizacji.', 'http://dev-livecode.codenga.pl/portfolio-img/product_4.png', 7400]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [5, 'Masaż dla dwojga', 'Zabierz bliską Ci osobą na relaksujące chwile.', 'http://dev-livecode.codenga.pl/portfolio-img/product_5.png', 8500]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [6, 'Paintball', 'Adrenalina, emocje i walka - spróbuj swoich sił na arenie paintball!', 'http://dev-livecode.codenga.pl/portfolio-img/product_6.png', 1100]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [7, 'Wstęp do parku rozrywki', 'Przeżyj niesamowite chwile w rodzinnym parku rozrywki.', 'http://dev-livecode.codenga.pl/portfolio-img/product_7.png', 5000]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [8, 'Lot balonem', 'Przeżyj niesamowity przelot balonem i podziwiaj widoki.', 'http://dev-livecode.codenga.pl/portfolio-img/product_8.png', 5500]);
        (await db).run('INSERT INTO products VALUES (?, ?, ?, ?, ?)', [9, 'Naucz się profesjonalnej wspinaczki górskiej.', 'Naucz się profesjonalnej wspinaczki górskiej.', 'http://dev-livecode.codenga.pl/portfolio-img/product_9.png', 7000]);*/

        return (await db).all('SELECT * FROM products ORDER BY productId');
    }

    async findOne(productId: number): Promise<any> {
        return (await (db)).get('SELECT * FROM products WHERE productId = :productId', {':productId': productId});
    }
}
