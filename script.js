//var books = [];
//*****start of original code



$('.search').on('click',function () {
	var fetch = function () {
  	$.ajax({
	    method: "GET",
	    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
	    dataType: "json",
	    success: function(data) {
	    	var arraybook = [{
	    		title: data.items[0].volumeInfo.title,
	    		authors: data.items[0].volumeInfo.authors[0],
	    		description: data.items[0].volumeInfo.description,
	    		image: data.items[0].volumeInfo.imageLinks.smallThumbnail,
	    		pageCount: data.items[0].volumeInfo.pageCount

}]; 
	var source = $('#book-template').html();
	var template = Handlebars.compile(source);
	var newHtml = template({books:arraybook});
		    $('.newBook').append(newHtml);

/*debugger;*/ 
		     console.log(data.items[0].volumeInfo.title);
		     console.log(data.items[0].volumeInfo.authors[0]);
		     console.log(data.items[0].volumeInfo.description);
		     console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail);
		     console.log(data.items[0].volumeInfo.pageCount);
	     
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      console.log(textStatus);
	    }
	  }); 
	};

	fetch()
		});
















//*********
//var createNewBook = function (){

	//create object
	//var book = {
		//author: $('#theAuthor').val(),
		//title: $('#theTitle').val(),
		//description: $('#theDescription').val(),
		//image: $('#theImage').val()
	//}

    //push obj to books
    //books.push(book);

    //console.log(books);---TEST to see if works
//}

//var appendBooks = function(){
	//loop
//	for (var i = 0; i < books.length; i++) {
//		books[i]
//	}
//	var source = $('#menu-template').html();
//	var template = Handlebars.compile(source);
//	var bookSearch = template(book);
//	$('.newBook').append(bookSearch);
//}

