//========================================================================================================================
// This .js file contains functions to generate the required HTML according to the task but due to the Judge's system
// requirement that only 1 function can be submitted it will not work there. Further down there is a commented function
// that works in Judge but it does not make the books' ids sequential - the id is "1" every time.
//========================================================================================================================

// Simulating static variable
function getBookId() {
    return getBookId.num++;
}

// Initialize the start value for the books' ids
getBookId.num = 1;

function createBook(selector, title, authorName, isbn) {

    let bookId = getBookId();

    let bookDiv = $('<div>').attr('id', `book${bookId}`).css('border', 'none');

    let titleParagraph = $('<p>').addClass('title').text(title);
    titleParagraph.appendTo(bookDiv);

    let authorParagraph = $('<p>').addClass('author').text(authorName);
    authorParagraph.appendTo(bookDiv);

    let isbnParagraph = $('<p>').addClass('isbn').text(isbn);
    isbnParagraph.appendTo(bookDiv);

    let selectBtn = $('<button>').text('Select');
    selectBtn.on('click', function () {
        bookDiv.css('border', '2px solid blue');
    });
    selectBtn.appendTo(bookDiv);

    let deselectBtn = $('<button>').text('Deselect');
    deselectBtn.on('click', function () {
        bookDiv.css('border', 'none');
    });
    deselectBtn.appendTo(bookDiv);

    let container = $(selector);
    bookDiv.appendTo(container);
}

// Function that gives 100 points in Jugde but it is not correct - the id is always "1"
//
// function createBook(selector, title, authorName, isbn) {
//     let bookGeneratorVar = (function () {
//
//         let bookId = 1;
//         return function (selector, title, authorName, isbn) {
//
//             let bookDiv = $('<div>').attr('id', `book${bookId}`).css('border', 'none');
//
//             let titleParagraph = $('<p>').addClass('title').text(title);
//             titleParagraph.appendTo(bookDiv);
//
//             let authorParagraph = $('<p>').addClass('author').text(authorName);
//             authorParagraph.appendTo(bookDiv);
//
//             let isbnParagraph = $('<p>').addClass('isbn').text(isbn);
//             isbnParagraph.appendTo(bookDiv);
//
//             let selectBtn = $('<button>').text('Select');
//             selectBtn.on('click', function () {
//                 bookDiv.css('border', '2px solid blue');
//             });
//             selectBtn.appendTo(bookDiv);
//
//             let deselectBtn = $('<button>').text('Deselect');
//             deselectBtn.on('click', function () {
//                 bookDiv.css('border', 'none');
//             });
//             deselectBtn.appendTo(bookDiv);
//
//             let container = $(selector);
//             bookDiv.appendTo(container);
//         };
//     }());
//
//     bookGeneratorVar(selector, title, authorName, isbn);
// }