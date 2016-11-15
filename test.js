

$('.search').on('click',function(){

	var fetch = function () {
	  $.ajax({
	    method: "GET",
	    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
	    dataType: "json",
	    success: function(data) {
	      console.log(data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      console.log(textStatus);
	    }
	  }); 
	};
});

fetch();