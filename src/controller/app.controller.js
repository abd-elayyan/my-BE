import allBooks from "../fake DB/app_DB.js";

// First function view all books :
export const viewAllBooks = (req, res, next) => {
  console.log("view all books");
  const result = {
    msd: "view all books",
    allBooks,
  };
  return res.json(result);
};

//Second fonction add new book :
let nextId = allBooks.length;
export const addNewBook = (req, res, next) => {
  console.log("add new book");
  const { title, author, pages } = req.body;
  const isExist = allBooks.findIndex((book) => book.title == title);
  if (isExist == -1) {
    nextId++;
    const newBook = {
      id: nextId,
      title: title,
      author: author,
      pages: pages,
    };

    // persist the new book in the in-memory array
    allBooks.push(newBook);

    const result = {
      msg: "New book added successfully.",
      newBook,
      msgg: "All books after adding the book.",
      allBooks,
    };
    return res.json(result);
  } else {
    const result = {
      msg: "the book already exsisted.",
      allBooks,
    };
    return res.json(result);
  }
};

// third function edit a book :
export const editBook = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const isExist = allBooks.findIndex((book) => book.id === id);
    //case 1 : no id
    if (!req.params.id) {
      return res.json("there is no ID provided , provide an ID please");
    }
    // case 2 : wrong id
    if (isExist === -1) {
      const result = {
        msg: "There is no book with the provided ID.",
        allBooks,
      };
      return res.json(result);
    }
    //case 3 : data is correct
    const book = allBooks[isExist];
    const { title, author, pages } = req.body;
    book.title = title;
    book.author = author;
    book.pages = pages;
    const result = {
      msg: "Book information edited successfully.",
      msgg: "the edited book :",
      book,
      msggg: "All books :",
      allBooks,
    };
    return res.json(result);
  } catch (error) {
    return error;
  }
};

// last function :
export const deleteBook = (req, res, next) => {
  const id = Number(req.params.id);
  const index = allBooks.findIndex((book) => book.id == id);
  // if the id does not exsist :
  if (index == -1) {
    const result = {
      msg: "The id does not exsist in the library",
      allBooks,
    };
    return res.json(result);
  }
  allBooks.splice(index, 1);
  const result = {
    msg: "The book deleted successfully.",
    allBooks,
  };
  return res.json(result);
};
