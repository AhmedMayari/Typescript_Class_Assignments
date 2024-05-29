// Part 1: Employee Data
// Challenge:

// 1. Design a type alias named Employee to represent an employee object with properties like name (string), department (string), and role (string).
type Employee ={
    name: string,
    department: string,
// 2. Employ a union type for the role property to restrict it to "Manager", "Engineer", or "Intern".
    role: "Manager" | "Engineer" | "Intern",
// 3. Include an optional nested object named contact to hold phone and email information.
    contact: {
        phone: number,
        email: string
    },
// 4. Make the skills property an optional array of strings for listing an employee's skills
    skill: string[]
};

let employee: Employee = {
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

// Part 2: Car Details
// Challenge:

// 1. Design a type alias named Car to represent a car object.
type Car = {
// 2. Include a nested object named engine within Car, containing a property named horsepower (number).
engine: {
    horsePower: number;
};
// 3. Define a function named getHorsepower directly within the Car type allias.
getHorsepower: () => number;
};
let myCar: Car = {
    engine: {
        horsePower: 420
    },
// Define the function to retrieve the engine's horsepower
    getHorsepower() {
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
type product = {
    name: string;
    price: number;
    color: string;
    inventory: {
        stock: number;
        colorOptions?: string[];
// 3. Inside the inventory object, define a function named changeColor.
        changeColor: (newColor: string) => void;
    };
};

// Function to create a product
function createProduct(name: string, price: number, color: string, stock: number, colorOptions?: string[]): product {
    const tshirt: product = {
        name: name,
        price: price,
        color: color,
        inventory: {
            stock: stock,
            colorOptions: colorOptions,
            changeColor: function(newColor: string): void {
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
const myTshirt = createProduct('Cool T-Shirt', 20, 'green', 50, ['red', 'blue', 'green', 'yellow']);

// Output initial product details
console.log('Initial Product Details:');
console.log(`Name: ${myTshirt.name}`);
console.log(`Price: $${myTshirt.price.toFixed(2)}`);
console.log(`Color: ${myTshirt.color}`);
console.log(`Stock: ${myTshirt.inventory.stock}`);
console.log(`Color Options: ${myTshirt.inventory.colorOptions?.join(', ')}`);

// Change color to red and output updated details
myTshirt.inventory.changeColor('red');
console.log(` `);
console.log('Updated Product Details after changing color to red:');
console.log(`Name: ${myTshirt.name}`);
console.log(`Price: $${myTshirt.price.toFixed(2)}`);
console.log(`Color: ${myTshirt.color}`);
console.log(`Stock: ${myTshirt.inventory.stock}`);
console.log(`Color Options: ${myTshirt.inventory.colorOptions?.join(', ')}`);

// Change color to blue and output updated details
myTshirt.inventory.changeColor('blue');
console.log(` `);
console.log('Updated Product Details after changing color to blue:');
console.log(`Name: ${myTshirt.name}`);
console.log(`Price: $${myTshirt.price.toFixed(2)}`);
console.log(`Color: ${myTshirt.color}`);
console.log(`Stock: ${myTshirt.inventory.stock}`);
console.log(`Color Options: ${myTshirt.inventory.colorOptions?.join(', ')}`);
