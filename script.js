var books = [];

var createNewBook = function (){

	//create object
	var book = {
		author: $('#theAuthor').val(),
		title: $('#theTitle').val(),
		description: $('#theDescription').val(),
		image: $('#theImage').val()
	}

    //push obj to books
    books.push(book);

    //console.log(books);---TEST
}

var appendBooks = function(){
	//loop
	for (var i = 0; i < books.length; i++) {
		books[i]
	}
	var source = $('#menu-template').html();
	var template = Handlebars.compile(source);
	var bookSearch = template(book);
	$('.newBook').append(bookSearch);
}

$('.search').on('click',function () {
	createNewBook();
	appendBooks()
		})
