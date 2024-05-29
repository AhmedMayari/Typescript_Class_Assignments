// Part 1: Basic Arrays - Product Inventory
// Challenge: You are tasked with creating a Product Inventory system. Implement functions and logic to manage object manipulation effectively.
// 2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
var products = [
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
function changeColor(product, newColor) {
    product.inventory.selectedColor = newColor;
    switch (newColor) {
        case "white":
            product.price *= 1.1;
            break;
        case "purple":
            product.price *= 1.15;
            product.price;
            break;
        default:
            break;
    }
    ;
}
;
// 4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.
products.forEach(function (product) {
    console.log("Products name: ".concat(product.name));
    console.log("Price: $".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(" ")));
    console.log(" ");
});
// 2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.
var students = [
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
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (num, currnum) { return num + currnum; }, 0);
    return sum / grades.length;
}
;
// 4. Display each student's name and average grade. Iterate through the students array, calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade.
students.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Student name: ".concat(student.name));
    console.log("Average Grade: ".concat(averageGrade));
    console.log(" ");
});
// 2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.
var employees = [{
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
function calculateSalary(employee) {
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employee.salary *= 1.1;
    }
    ;
}
;
// Calculate salary for each employee
employees.forEach(function (employee) {
    calculateSalary(employee);
    console.log("Employee name: ".concat(employee.name));
    console.log("Employee hoursWorked: ".concat(employee.hoursWorked));
    console.log("Employee hourlyRate: ".concat(employee.hourlyRate));
    console.log("Employee salary: ".concat(employee.salary));
    console.log(" ");
});
