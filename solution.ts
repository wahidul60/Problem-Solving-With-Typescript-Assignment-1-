const formatValue = (value: string | number | boolean) => {

    if (typeof value === "string") {
        return (value.toUpperCase()) + ';';
    }
    if (typeof value === "number") {
        return (value * 10) + ';';
    }
    if (typeof value === "boolean") {
        return (!value) + ';';
    }
}


const getLength = (input: string | any[]) => {
    if (typeof input === "string") {
        return (input.length) + ';';
    } else if (Array.isArray(input)) {
        return (input.length) + ";";
    }
}


class Person {
    constructor(public name: string, public age: number) {
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}';`;
    }
}
const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);



type books = {
    title: string;
    rating: number;
}
let filterByRating = (items: books[]): books[] => {
    return (items.filter(item => item.rating >= 4))
};
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];



type user = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
let filterActiveUsers = (user: user[]): user[] => {
    return user.filter(item => item.isActive)
}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
let printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"} `)
}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};


type arrType = (number | string)[];
type valueType = (number | string);

let getUniqueValues = (array1: arrType, array2: arrType) => {
    const resultArray: arrType = [];
    function ifExist(data: valueType): boolean {
        for (let j = 0; j < resultArray.length; j++) {
            if (resultArray[j] === data) {
                return true
            }
        } return false;
    }
    for (let j = 0; j < array1.length; j++) {
        if (!ifExist(array1[j])) {
            resultArray[resultArray.length] = array1[j]
        }
    }
    for (let j = 0; j < array2.length; j++) {
        if (!ifExist(array2[j])) {
            resultArray[resultArray.length] = array2[j];
        }
    }
    return resultArray;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) {
        return 0;
    }
    const prices = products.map((item) => {
        let total = item.price * item.quantity;
        if (item.discount && item.discount >= 0 && item.discount <= 100) {
            let cut = (total * item.discount) / 100;
            total = total - cut;
        }
        return total;
    });

    const final = prices.reduce((sum, cur) => sum + cur, 0);
    return final;
};

const products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 }
];

