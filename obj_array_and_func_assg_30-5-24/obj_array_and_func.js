// Assignment 1: Building Your Friend List
// Task: Create a program that manages a simple friend list.
var peoople = {
    friends: [],
};
// 2. Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
var friennd1 = {
    firstName: "mateen",
    lastName: "mayari",
    id: 1,
};
var friennd2 = {
    firstName: "laiba",
    lastName: "shakeel",
    id: 2,
};
var friennd3 = {
    firstName: "rehan",
    lastName: "habib",
    id: 3,
};
// 3. Add these friend objects to the friends array within the people object.
peoople.friends.push(friennd1);
peoople.friends.push(friennd2);
peoople.friends.push(friennd3);
// 4. Output the entire people object to the console, displaying your information and your friend list.
console.log(peoople);
// /*Output
// {
//     friends: [
//       { firstName: 'mateen', lastName: 'mayari', id: 1 },
//       { firstName: 'laiba', lastName: 'shakeel', id: 2 },
//       { firstName: 'rehan', lastName: 'habib', id: 3 }
//     ]
//   }
// Assignment 2:Manipulating an Array: Rearranging Words
// Task: Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// 1. Scrambled Array: Start with an array of elements in a scrambled order
var scrambledArr = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// 2.  Modify the Array
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: Convert non-strings (booleans, numbers) to strings if needed.
scrambledArr.splice(2, 2);
// • Split elements into character arrays (optional).
// • Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
var indexofstringarray = [5, 2, 3, 0, 1, 4];
var rearrangedarr = indexofstringarray.map(function (index) { return scrambledArr[index]; });
// Use join() to combine elements back into a single string:
var statment = rearrangedarr.join(" "); // .join(" "): specifies that, join the elements by adding space in between them.
// /*Output
// I am a student of GIAIC
// Assignment 3: Company Product Catalog
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
var inventory = [];
var object1 = {
    name: "Loncin Generator",
    model: 3500,
    cost: 70000,
    quantity: 100,
};
var object2 = {
    name: "Inverex Solar Inverter",
    model: 1344,
    cost: 50840,
    quantity: 99,
};
var object3 = {
    name: "Toshiba TPS",
    model: 95898,
    cost: 150000,
    quantity: 98,
};
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(object1, object2, object3);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log("Quantity of the third product (".concat(inventory[2].name, "):"), inventory[2].quantity);
// 5. Explore adding and accessing more elements within the inventory array to understandhow to manage product data.
var object4 = {
    name: "Zebronics UPS",
    model: 95890,
    cost: 180000,
    quantity: 93,
};
var object5 = {
    name: "Volvo Generator",
    model: 9500,
    cost: 99000,
    quantity: 49,
};
inventory.push(object4, object5);
inventory.forEach(function (product, index) {
    console.log("Product ".concat(index + 1, ":"));
    console.log("  Name: ".concat(product.name));
    console.log("  Model: ".concat(product.model));
    console.log("  Cost: ".concat(product.cost));
    console.log("  Quantity: ".concat(product.quantity));
});
// 2. Student List: An array named students stores information about several students using the Student template. Think of this array as your class list!
var students = [
    {
        name: "hammad",
        isSenior: true,
        hasCompletedAssignments: true
    },
    {
        name: "hamza",
        isSenior: true,
        hasCompletedAssignments: false
    },
    {
        name: "mateen",
        isSenior: false,
        hasCompletedAssignments: true
    },
    {
        name: "azan",
        isSenior: false,
        hasCompletedAssignments: false
    },
    {
        name: "jafar",
        isSenior: true,
        hasCompletedAssignments: true
    }
];
// 3. Find Senior Students with Assignments: The code has a function that might find students who are seniors and have completed their assignments.
function filterSeniorStudWithAssig(student) {
    return student.isSenior && student.hasCompletedAssignments;
}
var seniorStudWithAssig = students.filter(filterSeniorStudWithAssig);
console.log('Senior Students With Assignments:', seniorStudWithAssig);
// /*Output
// [
//   { name: 'hammad', isSenior: true, hasCompletedAssignments: true },
//   { name: 'jafar', isSenior: true, hasCompletedAssignments: true }
// ]
// 4. Class List Update: Imagine you need to update your class list! The code might have a function that removes students who haven't completed their assignments.
function removeStudentWithoutAssignments(students) {
    return students.filter(function (student) { return student.hasCompletedAssignments; });
}
students = removeStudentWithoutAssignments(students);
console.log('Students Without Assignments:', students);
