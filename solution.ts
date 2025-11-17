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
    title : string;
    rating : number;
}
let filterByRating =(items:books[]) : books[] => {
    return (items.filter(item => item.rating >= 4)) 
};
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
]; 



type user = {
    id: number;
    name : string;
    email : string;
    isActive : boolean;
}
let filterActiveUsers =(user:user[]) :user[]=>  {
   return user.filter(item => item.isActive)
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



