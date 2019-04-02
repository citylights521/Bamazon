DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products(
    item_id INTEGER(10) AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30),
    price INTEGER(10),
    stock_quantity INTEGER(10),
    messages varchar(150) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products VALUES (1,'MAC lipstick','Costmetics',25,30,'Pout love!'),(2,'Flower Bomb','Fragrances',150,15,'You smell wonderful'),(3,'AGL flats','Shoes',250,20,'Made in Italy, love the shoes!'),(4,'MAC eye shadow','Costmetics',14,30,'Lovely!'),(5,'Marc Jacobs Hobo Bag','Handbags',800,8,'Marc would be proud of your selection'),(6,'coffee beans','eBar',18,50,'The best part of waking up is coffee in your cup'),(7,'mug','eBar',16,15,'Be sure to buy some coffee beans to fill this cup with!'),(8,'setting powder','Costmetics',45,20,'Let your personality shine, not your face'),(9,'Joe Jeans','Clothing',220,20,'Good enough for Joe, good enough for you.'),(10,'Zoya','Costmetics',12,15,'You are going to love this polish!');