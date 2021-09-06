

// Function to search for the books.
function searchBook(Key) {
  let booksearchBook = books.find((item) =>
      item.id === Key || item.title === Key || item.author === Key
  );

  if (booksearchBook) {
    return booksearchBook;
  } else {
    return "The book did not found";
  }
}

// Function to sell the books.
function sellBook(title, quantity, balance) {
  let result = searchBook(title);
  let avalibalQuantity = result.quantity;
  let price = result.price;
  if(result !== 'The book did not found' ){
    if (avalibalQuantity >= quantity && price <= balance) {
        console.log("Done ,Thank You\n");
        books = books.filter((item) => item.id !== result.id);
        result = { ...result, quantity: result.quantity - quantity };
        books = [...books, result];
      } else if (avalibalQuantity < quantity) {
        console.log("The quantity it's not enough");
      } else if (price > balance) {
        console.log("The Balance not enough");
      }
      } else{
      return result
  }
}

// Function to add the books.
function addBook(BookID, BookTitle, Author, Price, Quantity) {
  const newbook = {BookID,BookTitle,Author,Price,Quantity};
  return newbook;
}

// The books Array.
let books = [];
books.push(addBook(1, "Start with why", "Simon Sinek", 80.0, 13)); // Add the Start with why book into array.
books.push(addBook(2, "But how do it know", "J. Clark Scott", 59.5, 22)); // Add the But how do it know book into array.
books.push(addBook(3, "Clean Code", "Robert Cecil Martin", 50.0	, 5)); // Add the Clean Code book into array.
books.push(addBook(4, "Zero to One", "Peter Thiel", 45.0	, 12)); // Add the Zero to One book into array.
books.push(addBook(5, "You don't know JS", "Kyle Simpson", 39.9, 9)); // Add the You don't know JS book into array.


console.log('Before sell the book');
console.log(books);

sellBook("Clean Code", 2, 50.0);
sellBook("You don't know JS", 5, 39.9);

console.log('After sell the book');
console.log(books);
