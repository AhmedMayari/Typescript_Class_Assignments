// Part 1: Basic Arrays - Product Inventory
// Challenge: You are tasked with creating a Product Inventory system. Implement functions and logic to manage object manipulation effectively.

// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.

type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: (string[]);
    };
}

// 2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.

const products: Product[] = [
    {
        name: "MacBook Pro",
        price: 1499,
        inventory: {
            stock: 100,
            colorOptions: ["Space Gray", "Silver"]
        }
    },
    {
        name: "Nike Air Max 270",
        price: 150,
        inventory: {
            stock: 300,
            colorOptions: ["Black/White", "Red/White"]
    }
    },
    {
        name: "iPhone 13",
        price: 799,
        inventory: {
            stock: 200,
            colorOptions: ["Midnight,", "Starlight"]
        }
    }
];

// 3. Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color.

function changeColor(product: any, newColor: string){
    product.inventory.selectedColor = newColor;
    switch(newColor){
        case "white":
            product.price *= 1.1;
        break;
        case "purple":
            product.price *= 1.15;
            product.price 
        break;
        default:
            break;
    };
};


// 4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.

products.forEach(function(product){
    console.log(`Products name: ${product.name}`) 
    console.log(`Price: $${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(" ")}`);
    console.log(" ");
});

// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge: You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectively.

// 1. Define a TypeScript type alias named Student to represent a student with the following
// properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.

type Student = {
    name: string,
    grades: number[];
};

// 2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.

const students: Student[] = [
    {
        name: "hashir",
        grades: [70, 80, 90]
    },
    {
        name: "asharib",
        grades: [50, 60, 80]
    },
    {
        name: "abdullah",
        grades: [91, 92, 95]
    }
];

// 3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.

function calculateAverageGrade(grades: number[]): number {
    const sum = grades.reduce((num, currnum) => num + currnum, 0);
    return sum / grades.length;
};

// 4. Display each student's name and average grade. Iterate through the students array, calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade.

students.forEach(function (student) {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`Student name: ${student.name}`);
    console.log(`Average Grade: ${averageGrade}`);
    console.log(" ");
    });

// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge: You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.

// 1. Define a type alias named Employee with the following
// properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.

type Employee = {
    name: string,
    hoursWorked: number,
    hourlyRate: number,
    salary: number
};

// 2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.

const employees = [{
    name: "salman",
    hoursWorked: 9,
    hourlyRate: 25,
    salary: 0
}, {
    name: "sohail",
    hoursWorked: 12,
    hourlyRate: 22,
    salary: 0
}, {
    name: "amir",
    hoursWorked: 15,
    hourlyRate: 20,
    salary: 0
}
];

// 3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.

function calculateSalary(employee: Employee) {
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employee.salary *= 1.1;
    };
};

// Calculate salary for each employee
employees.forEach(function(employee) {
    calculateSalary(employee);
    console.log(`Employee name: ${employee.name}`);
    console.log(`Employee hoursWorked: ${employee.hoursWorked}`);
    console.log(`Employee hourlyRate: ${employee.hourlyRate}`);
    console.log(`Employee salary: ${employee.salary}`);
    console.log(" ");
});