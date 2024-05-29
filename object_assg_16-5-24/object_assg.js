// Part 1: Employee Data
// Challenge:
var _a, _b, _c;
var employee = {
    name: "Shahzaib",
    department: "IT Department",
    role: "Engineer",
    contact: {
        phone: 923001234567,
        email: "abc_123@gmail.com"
    },
    skill: ["Problem-Solving", "Project Management", "Teamwork"]
};
console.log(employee);
var myCar = {
    engine: {
        horsePower: 420
    },
    // Define the function to retrieve the engine's horsepower
    getHorsepower: function () {
        return this.engine.horsePower;
    }
};
console.log(myCar.getHorsepower());
// Part 3: Colorful T-shirts
Challenge: 
// 1. Design a type alias named Product to represent a T-shirt object with properties like name (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object should have two
// properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors.
;
// Function to create a product
function createProduct(name, price, color, stock, colorOptions) {
    var tshirt = {
        name: name,
        price: price,
        color: color,
        inventory: {
            stock: stock,
            colorOptions: colorOptions,
            changeColor: function (newColor) {
                switch (newColor.toLowerCase()) {
                    case 'red':
                        this.stock > 0 ? tshirt.price *= 1.1 : tshirt.price;
                        break;
                    case 'blue':
                        this.stock > 0 ? tshirt.price *= 0.95 : tshirt.price;
                        break;
                    default:
                        this.stock > 0 ? tshirt.price *= 1.05 : tshirt.price;
                        break;
                }
                tshirt.color = newColor;
            }
        }
    };
    return tshirt;
}
// Creating a T-shirt product
var myTshirt = createProduct('Cool T-Shirt', 20, 'green', 50, ['red', 'blue', 'green', 'yellow']);
// Output initial product details
console.log('Initial Product Details:');
console.log("Name: ".concat(myTshirt.name));
console.log("Price: $".concat(myTshirt.price.toFixed(2)));
console.log("Color: ".concat(myTshirt.color));
console.log("Stock: ".concat(myTshirt.inventory.stock));
console.log("Color Options: ".concat((_a = myTshirt.inventory.colorOptions) === null || _a === void 0 ? void 0 : _a.join(', ')));
// Change color to red and output updated details
myTshirt.inventory.changeColor('red');
console.log(" ");
console.log('Updated Product Details after changing color to red:');
console.log("Name: ".concat(myTshirt.name));
console.log("Price: $".concat(myTshirt.price.toFixed(2)));
console.log("Color: ".concat(myTshirt.color));
console.log("Stock: ".concat(myTshirt.inventory.stock));
console.log("Color Options: ".concat((_b = myTshirt.inventory.colorOptions) === null || _b === void 0 ? void 0 : _b.join(', ')));
// Change color to blue and output updated details
myTshirt.inventory.changeColor('blue');
console.log(" ");
console.log('Updated Product Details after changing color to blue:');
console.log("Name: ".concat(myTshirt.name));
console.log("Price: $".concat(myTshirt.price.toFixed(2)));
console.log("Color: ".concat(myTshirt.color));
console.log("Stock: ".concat(myTshirt.inventory.stock));
console.log("Color Options: ".concat((_c = myTshirt.inventory.colorOptions) === null || _c === void 0 ? void 0 : _c.join(', ')));
