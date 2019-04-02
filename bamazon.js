// JavaScript

//include required package(s)
//TODO: add to ReadMe: user run: npm install 
//TODO: add to ReadME: user input own mysql password in js file (password section)

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
    console.log("connected as id " + connection.threadId);
    viewItems();
});


//prompt user to input the ID of the product they would like to buy
//prompt the user to ask how many units of the product they would like to buy
function viewItems() {
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.table(result);       
        
        var products = result.map(function(item) {
            return {name: item.product_name, value: item.item_id};
        })

        // for (let i = 0; i < products.length; i++) {
        //     console.log(products[i]);
        // }

        // TODO: change to for loop array for product name instead of hard coded

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
                console.log(productResponse);
                var product_id = productResponse.userChoice;

                if (productResponse.userChoice === "MAC lipstick") {
                    console.log("Pout love!");

                } else if (productResponse.userChoice === "Flower Bomb") {
                    console.log("You smell wonderful");

                } else if (productResponse.userChoice === "AGL flats") {
                    console.log("Made in Italy, love the shoes!");

                } else if (productResponse.userChoice === "MAC eye shadow") {
                    console.log("Lovely!");

                } else if (productResponse.userChoice === "Marc Jacobs Hobo Bag") {
                    console.log("Marc would be proud of your selection");

                } else if (productResponse.userChoice === "coffee beans") {
                    console.log("The best part of waking up is coffee in your cup");

                } else if (productResponse.userChoice === "mug") {
                    console.log("Be sure to buy some coffee beans to fill this cup with!");

                } else if (productResponse.userChoice === "setting powder") {
                    console.log("Let your personality shine, not your face");

                } else if (productResponse.userChoice === "Joe Jeans") {
                    console.log("Good enough for Joe, good enough for you.");

                } else if (productResponse.userChoice === "Zoya") {
                    console.log("You're going to love this polish!");

                }

                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "How many would you like to get?",
                            name: "requestedQuantity"
                        }
                    ])

                    .then(function (answer) {

                        var requestedQuantity = answer.requestedQuantity;
                        console.log(requestedQuantity);
                        

                        // check how much stock there is for the chosen item
                        //TODO: working in Workbench, however may be where the error is coming from
                        connection.query("SELECT * FROM products WHERE item_id=?", product_id, function (err, result) {
                            if (err) throw err;
                            console.log(result);
                            var actualQuantity = result[0].stock_quantity;
                            console.log(actualQuantity);


                            // determine if there is enough in stock to meet the customers desired quantity
                            if (requestedQuantity <= actualQuantity) {
                                // have enough stock, tell customer their order if fulfilled


                                connection.query("UPDATE products SET ? WHERE ?",
                                    [
                                        {
                                            stock_quantity: actualQuantity - requestedQuantity
                                        },
                                        {
                                            item_id: product_id
                                        }
                                    ],

                                    console.log("Your order has been placed!"));

                                // answer();

                            }

                            else {
                                // not enough stock, sorry customer message
                                console.log("Sorry we don't have enough in stock to fulfill your order.");
                                // answer();
                            }

                        }
                        );

                    }
                    )
            }


                //once user has ordered run check quantity function to see if you have enough inventory to fulfill the order

                //compare user input requestedQuantity to stock_quantity, if >, message "sorry insufficient stock" and connection.end



                //if not, "Insufficient quantity!", and prevent the order from going thorugh
                //else fulfill the customers order
                //update the SQL database to change quantity
                //show the customer the total cost of their purchase}

            )
    })
}
