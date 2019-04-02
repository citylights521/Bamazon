// JavaScript

//include required package(s)
//TODO: user run: npm install 
//TODO: user input own mysql password in js file (password section)

let mysql = require("mysql");
let inquirer = require("inquirer");


let connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "PassWord123",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    viewItems();
});

//function for viewing product offering and gathering customer input
function viewItems() {
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.table(result);

        //goes through all result options and creates a name value pair for customers product selection
        var products = result.map(function (item) {
            return { name: item.product_name, value: item.item_id };
        })

        //prompts user to input the product they would like to buy
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which product would you like to purchase?",
                    choices: products,
                    name: "userChoice",

                }
            ])
            .then(function (productResponse) {
                if (err) throw err;
                // console.log(productResponse);
                var product_id = productResponse.userChoice;

                console.log(result[product_id - 1].messages);

                //prompts user to find out how many units of the product they would like to buy
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "How many would you like to get?",
                            name: "requestedQuantity"
                        }
                    ])
                    //function that checks the available quantity against the requested quantity and acts accordingly
                    .then(function (answer) {
                        var requestedQuantity = answer.requestedQuantity;
                        // check how much stock there is for the chosen item
                        connection.query("SELECT * FROM products WHERE item_id=?", product_id, function (err, result) {
                            if (err) throw err;
                            var actualQuantity = result[0].stock_quantity;
                            var price = result[0].price;

                            //determines if there is enough in stock to meet the customers desired quantity
                            if (requestedQuantity <= actualQuantity) {

                                //if have enough stock, update the available stock quantity and tell customer their total and that their order is fulfilled
                                var newQuantity = actualQuantity - requestedQuantity;
                                var totalPrice = requestedQuantity * price;
                                connection.query("UPDATE products SET ? WHERE ?",
                                    [
                                        {
                                            stock_quantity: newQuantity
                                        },
                                        {
                                            item_id: product_id
                                        }
                                    ],
                                    console.log("Your order has been placed! Your total is $" + totalPrice + "."));
                            }

                            // not enough stock, sorry customer message
                            else {
                                console.log("Sorry we don't have enough in stock to fulfill your order.");
                            }
                            connection.end();
                        }
                        );
                    }
                    )
            }
            )
    })
}

//User *IMPORTANT* To initialize or reset bamazon DB, execute the bamazon.sql file content in a MySQL CLI or Workbench. 