type Book = { title: string, author: string, price: number }
export const books: Map<number, Book> = new Map();

books.set(1, {title: "book #1", author: "superman", price: 99.99});

books.set(2, {title: 123, author: true, price: "200"});

books.set(3, "taaa daaa!");

books.set("4", {title: "book #2", author: "batman", price: 99.99});
