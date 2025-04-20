const library = [];

function addBook() {
  const title = prompt("Enter book title:");
  const author = prompt("Enter author's name:");
  const isRead = confirm("Have you read this book?");
  const book = {
    title: title,
    author: author,
    isRead: isRead
  };
  library.push(book);
}

function listBook() {
  if (library.length === 0) {
    console.log("Your library is empty.");
  } else {
    library.forEach((book, index) => {
      const status = book.isRead ? "Read" : "Not read";
      console.log(`${index + 1}. "${book.title}" by ${book.author} - ${status}`);
    });
  }
}

function markAsRead(title) {
  const book = library.find(book => book.title.toLowerCase() === title.toLowerCase());
  if (book) {
    book.isRead = true;
    alert(`"${book.title}" has been marked as read.`);
  } else {
    alert(`Book titled "${title}" not found in your library.`);
  }
}

let running = true;

while (running) {
  const choice = prompt(`Welcome to the library! Please select your choice:
  1. Add book
  2. List book
  3. Mark book as read
  4. Exit
  Enter your choice:`);

  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      listBook();
      break;
    case "3":
      const title = prompt("Enter the title of the book to mark as read:");
      markAsRead(title);
      break;
    case "4":
      running = false;
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice.");
  }
}