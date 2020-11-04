window.onload=function(){
	//These are the API settings and used in the jQuery ($) request
	var settings = {
		"url": "https://api.propublica.org/congress/v1/house/votes/recent.json",
		"method": "GET",
		"timeout": 0,
		"headers": {
			"X-API-Key": "Z8Y5zZOCve200cwjWSBKuOCxoihtdvDKuIZ58STw"
		},
	};

	//This is the jQuery get request to get the informatioon from the API
	$.ajax(settings).done(function (response) {
		//Once the get request from the API is complete, this code will run
		var votingTable = document.getElementById("votingTable");

		//Loop through each of the voting results received from the API
		for (var vote in response.results.votes){
			//Assign the current record to a variabe
			var currentVote = response.results.votes[vote];

			//Create a new row in the table (at the end) and assign it to a variable
			var newRow = votingTable.insertRow(votingTable.rows.length);	

			//Now use the row variable we just created and create some new columns/cells in that row
			var topicColumn = newRow.insertCell(0);	
			var resultColumn = newRow.insertCell(1);	
			var demColumn = newRow.insertCell(2);	
			var repColumn = newRow.insertCell(3);	
			var totalColumn = newRow.insertCell(4);	

			//Now add the values from the API into each of the columns
			topicColumn.innerHTML = currentVote.question;
			resultColumn.innerHTML = currentVote.result;
			demColumn.innerHTML = currentVote.democratic.yes;
			repColumn.innerHTML = currentVote.republican.yes;
			totalColumn.innerHTML = currentVote.total.yes;
		}
	});
}