var books =new Map();

const bookType = {
  Mystery: 0,
  Fantasy: 1,
  NonFiction: 2,
};

function addBook(title, authors,  type, cost)
{
  var book={};
  book.title = title;
  book.author = authors;
  book.type = type;
  book.cost = cost;
 
  books.set(title,book);
}

addBook('Who did it',['James Smith','Jamie Brown'],bookType.Mystery,12.15);
addBook('Night in the stars', ['Jane Jones','Kim Davis'], bookType.Fantasy, 34.78);
addBook('My Life',['Jack Johnson'], bookType.NonFiction, 15.90);

var requestBook = books.get(process.argv[2]);
var requestCopies = process.argv[3];

console.log(requestBook);
console.log(totalCost(requestBook,requestCopies));

function totalCost(book, copies)
{
  return requestBook.cost * copies;
}

//Deprecated
function removeBook(book)
{
  myMap.delete(book.title);
}