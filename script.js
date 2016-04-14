function success(data) {
	console.log(data);

	output = '';

	for (i = 0; i < data.query.search.length; i++) {
		output += "<h4><p><a href='https://en.wikipedia.org/wiki/" + data.query.search[i].title + "' target = '_blank'>";
		output += data.query.search[i].title + "</a></p></h4>";
		output += "<p>" + data.query.search[i].snippet + "</p>";

		// TODO create links to these pages out of their headers

	}

	$('#results').html(output);
	$('#results-container').animate({'padding-top': '20px'})


}

$(document).ready(function(){

	$('#search').focusin(function(){
		$(this).animate({'width': '200px'}).attr('placeholder','search');
	});

	$('#search').focusout(function(){
		if ($(this).val() === '') {
			$(this).animate({'width': '35px'}).attr('placeholder','');
		}
	})

	$('#search-form').submit(function(e){
		e.preventDefault();

		// TODO slide from middle to top of the page

		$('#spacer').animate({'height': '20px'});

		var str = $('#search').val();	
		var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="
		url += str + "'"

		$.ajax(
			{ 	url: url,
				crossDomain: true,
				dataType: 'jsonp'
			}
		).done(function(data){
			console.log('done');
			success(data);
		});

	})
});