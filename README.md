# Bamazon
So many things to buy, so little time! Use Bamazon for your online shopping at the time that is convenient for YOU. 

## How to Use
Bamazon uses the MySQL and Inquirer npm packages to create an Amazon-like storefront with a Nordstrom-like product offering. It takes in customer orders and updates the stores inventory/stock accordingly. Be sure to look for the message that comes with every purchase request! 
As the user, you will need to do the following to use Bamazon:
* Clone the repo
* Run ‘npm install’ in your terminal
* Input your MySQL password in the js file
* To initialize or reset the Bamazon DB, you will need to execute the bamazon.sql file content in a MySQL CLI or Workbench
* From here, start by typing ‘node bamazon.js’ into your terminal. You will then see a table showing the available items along with the price per unit and additional product information. Move through the item list with your up and down keys and hit enter on the desired item. You will then be prompted to input how many (the quantity) of the item you would like to purchase. If there isn’t enough stock, sorry… If there is, great! Your order is placed and you will be presented with the total for your purchase. Keep an eye on the quantity count in the table. If there was enough stock and you place an order, the total quantity will decrease. If there wasn’t enough stock and therefore an order was not placed, the total quantity will not reduce. 

## Video How To
https://drive.google.com/file/d/1a3RDi68hIO8KfegXT7UNR10mz6X1YT_D/view

## GitHub Link
https://github.com/citylights521/Bamazon

## Components Used
* JavaScript
* MySQL npm package
* Inquirer npm package
* Workbench
* Node.js
* Visual Studio Code
* Markdown
* GitHub
* Screencastify (Video)

## Author
Claire Gibeau

## Feedback
This was my first time working in My.SQL. It was interesting to see how you can manipulate and call upon the information input in Workbench (My.SQL GUI). The most time-consuming part of this project was making the inventory total adjust according to the customer input. This entailed comparing the quantity the customer requested of a product to the number available, changing the number if appropriate, and then returning the purchase total if there was sufficient stock available. 
