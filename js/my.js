
//the array that we'll use for undo
var stack = [];

//temporary function that only increases
//the number on the frontend
//without making an api request
function incP1Temp() {
	//log "1" on the stack for undo
	//push the id of the player (p3 = 3).
	stack.push("1");

	increasePlayer(1);//pass in the playerID (p3=3)
}

//temporary function that only increases
//the number on the frontend
//without making an api request
function incP2Temp() {
	//log "2" on the stack for undo
	//push the id of the player (p3 = 3).
	stack.push("2");

	increasePlayer(2);
}

//TODO: will need to make one of these functions for each player you support
function incP3() {
	//push the id of the player (p3 = 3).
	stack.push("3");

	increasePlayer(3);//pass in the playerID (p3=3)
}

function incP4() {
	//push the id of the player (p3 = 3).
	stack.push("4");

	increasePlayer(4);//pass in the playerID (p3=3)
}

function incP5() {
	//push the id of the player (p3 = 3).
	stack.push("5");

	increasePlayer(5);//pass in the playerID (p3=3)
}

function incP6() {
	//push the id of the player (p3 = 3).
	stack.push("6");

	increasePlayer(6);//pass in the playerID (p3=3)
}

function incP7() {
	//push the id of the player (p3 = 3).
	stack.push("7");

	increasePlayer(7);//pass in the playerID (p3=3)
}

function incP8() {
	//push the id of the player (p3 = 3).
	stack.push("8");

	increasePlayer(8);//pass in the playerID (p3=3)
}

function incP9() {
	//push the id of the player (p3 = 3).
	stack.push("9");

	increasePlayer(9);//pass in the playerID (p3=3)
}

function incP10() {
	//push the id of the player (p3 = 3).
	stack.push("10");

	increasePlayer(10);//pass in the playerID (p3=3)
}

function incP11() {
	//push the id of the player (p3 = 3).
	stack.push("11");

	increasePlayer(11);//pass in the playerID (p3=3)
}

function incP12() {
	//push the id of the player (p3 = 3).
	stack.push("12");

	increasePlayer(12);//pass in the playerID (p3=3)
}

function incP13() {
	//push the id of the player (p3 = 3).
	stack.push("13");

	increasePlayer(13);//pass in the playerID (p3=3)
}

function incP14() {
	//push the id of the player (p3 = 3).
	stack.push("14");

	increasePlayer(14);//pass in the playerID (p3=3)
}

function incP15() {
	//push the id of the player (p3 = 3).
	stack.push("15");

	increasePlayer(15);//pass in the playerID (p3=3)
}

function incP16() {
	//push the id of the player (p3 = 3).
	stack.push("16");

	increasePlayer(16);//pass in the playerID (p3=3)
}

function incP17() {
	//push the id of the player (p3 = 3).
	stack.push("17");

	increasePlayer(17);//pass in the playerID (p3=3)
}

function incP18() {
	//push the id of the player (p3 = 3).
	stack.push("18");

	increasePlayer(18);//pass in the playerID (p3=3)
}

function incP19() {
	//push the id of the player (p3 = 3).
	stack.push("19");

	increasePlayer(19);//pass in the playerID (p3=3)
}

function incP20() {
	//push the id of the player (p3 = 3).
	stack.push("20");

	increasePlayer(20);//pass in the playerID (p3=3)
}

function incP21() {
	//push the id of the player (p3 = 3).
	stack.push("21");

	increasePlayer(21);//pass in the playerID (p3=3)
}

function incP22() {
	//push the id of the player (p3 = 3).
	stack.push("22");

	increasePlayer(22);//pass in the playerID (p3=3)
}

//currently supports: player 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
function undo() {
	if (stack.length > 0) {

		//the value on the stack will be the ID of the player
		//for ex. player 4 will be 4, so the value won't just be 1 or 2
		//thus, we can determine the index of the cell (valueRange)
		//to decrement based only on the topmost value on the stack

		var topElement = stack.pop();

		var score;
		var cell;

		//the only code that needs to change as you add incPN functions
		if(topElement == "1") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C4";
		} else if (topElement == "2") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C5";
		} else if (topElement == "3") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C10";
		} else if (topElement == "4") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C11";
		} else if (topElement == "5") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C16";
		} else if (topElement == "6") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C17";
		} else if (topElement == "7") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C22";
		} else if (topElement == "8") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C23";
		} else if (topElement == "9") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C28";
		} else if (topElement == "10") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C29";
		} else if (topElement == "11") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C34";
		} else if (topElement == "12") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C35";
		} else if (topElement == "13") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C40";
		} else if (topElement == "14") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C41";
		} else if (topElement == "15") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C46";
		} else if (topElement == "16") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C47";
		} else if (topElement == "17") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C52";
		} else if (topElement == "18") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C53";
		} else if (topElement == "19") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C58";
		} else if (topElement == "20") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C59";
		} else if (topElement == "21") {
			score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);
			cell = "C64";
		} else if (topElement == "22") {
			score = parseInt($("a#p2").text());
			score = score - 1;
			$("a#p2").text(score);
			cell = "C65";
		}

		//api code
		//var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
		//var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";
		var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1vA2PrRT0JICtMr1ULfbN_jhbBsMDSbdsLCk0xRzdaQE";
		var sheetName = "main";
		var pubKey = "AIzaSyC9yqorompBJBsu0GBzsGwRd3AeUrTpu5Y";

		var range = sheetName + "!" + cell + ":" + cell;//main!B4:B4
		var postURL = baseURL + "/values/" + range;

		var valueAsPayload = {
			"range": range,
			"majorDimension": "ROWS",
			"values": [
			[score]
			],
		}

		//Use gapi.client.request(args) function
		var request = gapi.client.request({
			'method': 'PUT',
			'path': postURL,
			'params': {
				'key': pubKey,
				'valueInputOption': 'USER_ENTERED'
			},
			'body': valueAsPayload
		});

    	//Execute the API request.
    	request.execute(function(response) {
    		console.log(response);
    	});
    }
}

//current for all players. won't need any modifications as you add more players
function isSetOver(matchID) {
	var p1Score = parseInt($("a#p1").text());
	var p2Score = parseInt($("a#p2").text());

	var scoreDiff = p1Score - p2Score;
	var absoluteScoreDiff = Math.abs(scoreDiff);

	if (((p1Score >= 11) || (p2Score >= 11)) && (absoluteScoreDiff >= 2)) {
		//the set is over
		//clear the stack
		stack = [];

		//find out who's the winner
		if (p1Score > p2Score) {//p1 is winner
			$("a#p1").text("0");//reset p1 score
			$("a#p2").text("0");//reset p2 score

			//increment p1 set count
			var setScore = parseInt($("#p1Sets").text());
			setScore = setScore + 1;
			$("#p1Sets").text(setScore);

			//call the function that makes the API request
			//increaseSet(matchID, playerID, setScore);
			increaseSet(matchID, 1, setScore);
			zeroOutGameScore(matchID);
		} else if (p2Score > p1Score) {//p2 is winner
			$("a#p1").text("0");//reset p1 score
			$("a#p2").text("0");//reset p2 score

			//increment p2 set count
			var setScore = parseInt($("#p2Sets").text());
			setScore = setScore + 1;
			$("#p2Sets").text(setScore);

			//call the function that makes the API request
			//increaseSet(matchID, playerID, setScore);
			increaseSet(matchID, 2, setScore);
			zeroOutGameScore(matchID);
		} else {
			//error...
			console.log("error in finding the winner of the set");
		}
	}
}

//current for all matches. won't ever need modification
//sets both scores and set counts to zero, on the view only
//and clears the stack
//TODO: resetting a match view should include clearing the form view!
function resetMatchView() {
	$("a#p1").text("0");//reset p1 score
	$("a#p2").text("0");//reset p2 score
	$("#p1Sets").text("0");//reset p1sets
	$("#p2Sets").text("0");//reset p2sets
	stack = [];//clear the stack

	//change opponent name in view back to "opponent"
	$("#opponent").text("Opponent");

	//clear the textareas of the form, on the view
	$("form").find("input[type=text], textarea").val("");
}

//current for matchID = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
function zeroOutGameScore(matchID) {
	/*var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";*/
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1vA2PrRT0JICtMr1ULfbN_jhbBsMDSbdsLCk0xRzdaQE";
	var sheetName = "main";
	var pubKey = "AIzaSyC9yqorompBJBsu0GBzsGwRd3AeUrTpu5Y";
	var valueRange;

	if (matchID == 1) {//the only block that has to change
		valueRange = "C4:C5";
	} else if (matchID == 2) {
		valueRange = "C10:C11";
	} else if (matchID == 3) {
		valueRange = "C16:C17";
	} else if (matchID == 4) {
		valueRange = "C22:C23";
	} else if (matchID == 5) {
		valueRange = "C28:C29";
	} else if (matchID == 6) {
		valueRange = "C34:C35";
	} else if (matchID == 7) {
		valueRange = "C40:C41";
	} else if (matchID == 8) {
		valueRange = "C46:C47";
	} else if (matchID == 9) {
		valueRange = "C52:C53";
	} else if (matchID == 10) {
		valueRange = "C58:C59";
	} else if (matchID == 11) {
		valueRange = "C64:C65";
	}

	var range = sheetName + "!" + valueRange;//main!B4:B5
	var postURL = baseURL + "/values/" + range;

	var valueAsPayload = {
		"range": range,
		"majorDimension": "COLUMNS",
		"values": [
		[0, 0]
		]
	}

	//Use gapi.client.request(args) function
	var request = gapi.client.request({
		'method': 'PUT',
		'path': postURL,
		'params': {
			'key': pubKey,
			'valueInputOption': 'USER_ENTERED'
		},
		'body': valueAsPayload
	});

    	//Execute the API request.
    	request.execute(function(response) {
    		console.log(response);
    	});
    }

//current for matchID = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
//resets current game score and sets
//Match 1: Player 1, Player 2
//TODO: resetting a match should also clear out the 4 cells in the google sheet
function reset(matchID) {
	/*var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";*/

	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1vA2PrRT0JICtMr1ULfbN_jhbBsMDSbdsLCk0xRzdaQE";
	var sheetName = "main";
	var pubKey = "AIzaSyC9yqorompBJBsu0GBzsGwRd3AeUrTpu5Y";

	var rangeOne;
	var rangeTwo;

	//update the view
	resetMatchView();

	//will need to update this to have conditionals for all N matches
	if (matchID == 1) {
		rangeOne = "B4";
		rangeTwo = "C5";
	} else if (matchID == 2) {
		rangeOne = "B10";
		rangeTwo = "C11";
	} else if (matchID == 3) {
		rangeOne = "B16";
		rangeTwo = "C17";
	} else if (matchID == 4) {
		rangeOne = "B22";
		rangeTwo = "C23";
	} else if (matchID == 5) {
		rangeOne = "B28";
		rangeTwo = "C29";
	} else if (matchID == 6) {
		rangeOne = "B34";
		rangeTwo = "C35";
	} else if (matchID == 7) {
		rangeOne = "B40";
		rangeTwo = "C41";
	} else if (matchID == 8) {
		rangeOne = "B46";
		rangeTwo = "C47";
	} else if (matchID == 9) {
		rangeOne = "B52";
		rangeTwo = "C53";
	} else if (matchID == 10) {
		rangeOne = "B58";
		rangeTwo = "C59";
	} else if (matchID == 11) {
		rangeOne = "B64";
		rangeTwo = "C65";
	}

	var range = sheetName + "!" + rangeOne + ":" + rangeTwo;//main!B4:B5

	var postURL = baseURL + "/values/" + range;

	var valueAsPayload = {
		"range": range,
		"majorDimension": "COLUMNS",
		"values": [
		[0, 0],
		[0, 0]
		],
	}

		//Use gapi.client.request(args) function
		var request = gapi.client.request({
			'method': 'PUT',
			'path': postURL,
			'params': {
				'key': pubKey,
				'valueInputOption': 'USER_ENTERED'
			},
			'body': valueAsPayload
		});

    	//Execute the API request.
    	request.execute(function(response) {
    		console.log(response);
    	});
}//end function reset

//current for matchID=1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
//note that playerID should always be 1 or 2
function increaseSet(matchID, playerID, setScore) {
	/*var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";*/
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1vA2PrRT0JICtMr1ULfbN_jhbBsMDSbdsLCk0xRzdaQE";
	var sheetName = "main";
	var pubKey = "AIzaSyC9yqorompBJBsu0GBzsGwRd3AeUrTpu5Y";
	
	var cell;

	//update this conditional to have logic for all matchIDs
	if (matchID == 1) {
		if (playerID==1) {
			cell = "B4";
		} else if (playerID==2) {
			cell = "B5";
		} else {
			console.log("error in increaseSet, matchid=1");
		}
	} else if (matchID == 2) {
		if (playerID==1) {
			cell = "B10";
		} else if (playerID==2) {
			cell = "B11";
		} else {
			console.log("error in increaseSet, matchid=2");
		}
	} else if (matchID == 3) {
		if (playerID==1) {
			cell = "B16";
		} else if (playerID==2) {
			cell = "B17";
		} else {
			console.log("error in increaseSet, matchid=3");
		}
	} else if (matchID == 4) {
		if (playerID==1) {
			cell = "B22";
		} else if (playerID==2) {
			cell = "B23";
		} else {
			console.log("error in increaseSet, matchid=4");
		}
	} else if (matchID == 5) {
		if (playerID==1) {
			cell = "B28";
		} else if (playerID==2) {
			cell = "B29";
		} else {
			console.log("error in increaseSet, matchid=5");
		}
	} else if (matchID == 6) {
		if (playerID==1) {
			cell = "B34";
		} else if (playerID==2) {
			cell = "B35";
		} else {
			console.log("error in increaseSet, matchid=6");
		}
	} else if (matchID == 7) {
		if (playerID==1) {
			cell = "B40";
		} else if (playerID==2) {
			cell = "B41";
		} else {
			console.log("error in increaseSet, matchid=7");
		}
	} else if (matchID == 8) {
		if (playerID==1) {
			cell = "B46";
		} else if (playerID==2) {
			cell = "B47";
		} else {
			console.log("error in increaseSet, matchid=8");
		}
	} else if (matchID == 9) {
		if (playerID==1) {
			cell = "B52";
		} else if (playerID==2) {
			cell = "B53";
		} else {
			console.log("error in increaseSet, matchid=9");
		}
	} else if (matchID == 10) {
		if (playerID==1) {
			cell = "B58";
		} else if (playerID==2) {
			cell = "B59";
		} else {
			console.log("error in increaseSet, matchid=10");
		}
	} else if (matchID == 11) {
		if (playerID==1) {
			cell = "B64";
		} else if (playerID==2) {
			cell = "B65";
		} else {
			console.log("error in increaseSet, matchid=11");
		}
	}

	var range = sheetName + "!" + cell + ":" + cell;//main!B4:B4
	var postURL = baseURL + "/values/" + range;

	var valueAsPayload = {
		"range": range,
		"majorDimension": "ROWS",
		"values": [
		[setScore]
		],
	}

	//Use gapi.client.request(args) function
	var request = gapi.client.request({
		'method': 'PUT',
		'path': postURL,
		'params': {
			'key': pubKey,
			'valueInputOption': 'USER_ENTERED'
		},
		'body': valueAsPayload
	});

    //Execute the API request.
    request.execute(function(response) {
    	console.log(response);
    });
}

//current for playerID = 1-22
//gets called by incP1, incP2, incP3, incP4, etc.
//player ID = 1, 2, 3, 4...
function increasePlayer(playerID) {
	/*var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";*/

	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1vA2PrRT0JICtMr1ULfbN_jhbBsMDSbdsLCk0xRzdaQE";
	var sheetName = "main";
	var pubKey = "AIzaSyC9yqorompBJBsu0GBzsGwRd3AeUrTpu5Y";

	var cell;
	var score;

	//set the cell based on the playerID
	//this will need to be modified as you add more players
	if (playerID == 1) {
		cell = "C4";
	} else if (playerID == 2) {
		cell = "C5";
	} else if (playerID == 3) {
		cell = "C10";
	} else if (playerID == 4) {
		cell = "C11";
	} else if (playerID == 5) {
		cell = "C16";
	} else if (playerID == 6) {
		cell = "C17";
	} else if (playerID == 7) {
		cell = "C22";
	} else if (playerID == 8) {
		cell = "C23";
	} else if (playerID == 9) {
		cell = "C28";
	} else if (playerID == 10) {
		cell = "C29";
	} else if (playerID == 11) {
		cell = "C34";
	} else if (playerID == 12) {
		cell = "C35";
	} else if (playerID == 13) {
		cell = "C40";
	} else if (playerID == 14) {
		cell = "C41";
	} else if (playerID == 15) {
		cell = "C46";
	} else if (playerID == 16) {
		cell = "C47";
	} else if (playerID == 17) {
		cell = "C52";
	} else if (playerID == 18) {
		cell = "C53";
	} else if (playerID == 19) {
		cell = "C58";
	} else if (playerID == 20) {
		cell = "C59";
	} else if (playerID == 21) {
		cell = "C64";
	} else if (playerID == 22) {
		cell = "C65";
	}

	var range = sheetName + "!" + cell + ":" + cell;//main!B4:B4
	var postURL = baseURL + "/values/" + range;

	if (playerID % 2 == 1) {//the "first" player -- P1, P3, etc.
		score = parseInt($("a#p1").text());
		score = score + 1;//set value on the frontend
		$("a#p1").text(score);
	} else {//the "second" player -- P2, P4, etc.
	score = parseInt($("a#p2").text());
	score = score + 1;
		$("a#p2").text(score);//set value on the frontend
	}

	var valueAsPayload = {
		"range": range,
		"majorDimension": "ROWS",
		"values": [
		[score]
		],
	}

	//Use gapi.client.request(args) function
	var request = gapi.client.request({
		'method': 'PUT',
		'path': postURL,
		'params': {
			'key': pubKey,
			'valueInputOption': 'USER_ENTERED'
		},
		'body': valueAsPayload
	});

    //Execute the API request.
    request.execute(function(response) {
    	console.log(response);
    });

 }//end function

//current for matchID = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
function sendForm(matchID) {

	var formAsArrayOfObjects = $("form").serializeArray();
	var time = formAsArrayOfObjects[0].value;
	var eventName = formAsArrayOfObjects[1].value;
	var table = formAsArrayOfObjects[2].value;
	var opponent = formAsArrayOfObjects[3].value;

	//set the html to be the opponent's name:
	$("#opponent").text(opponent.toString());

 	//console.log(time + " " + eventName + " " + table + " " + opponent);

/* 	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
 	var sheetName = "main";
 	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";*/

	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1vA2PrRT0JICtMr1ULfbN_jhbBsMDSbdsLCk0xRzdaQE";
	var sheetName = "main";
	var pubKey = "AIzaSyC9yqorompBJBsu0GBzsGwRd3AeUrTpu5Y";

 	var valueRange;

	if (matchID == 1) {//will need to add cases for other matches...
		valueRange = "A2:D2";
	} else if (matchID == 2) {
		valueRange = "A8:D8";
	} else if (matchID == 3) {
		valueRange = "A14:D14";
	} else if (matchID == 4) {
		valueRange = "A20:D20";
	} else if (matchID == 5) {
		valueRange = "A26:D26";
	} else if (matchID == 6) {
		valueRange = "A32:D32";
	} else if (matchID == 7) {
		valueRange = "A38:D38";
	} else if (matchID == 8) {
		valueRange = "A44:D44";
	} else if (matchID == 9) {
		valueRange = "A50:D50";
	} else if (matchID == 10) {
		valueRange = "A56:D56";
	} else if (matchID == 11) {
		valueRange = "A62:D62";
	}

	var range = sheetName + "!" + valueRange;//main!A2:D2
	var postURL = baseURL + "/values/" + range;

	var valueAsPayload = {
		"range": range,
		"majorDimension": "ROWS",
		"values": [
		[time, eventName, table, opponent]
		],
	}

	//Use gapi.client.request(args) function
	var request = gapi.client.request({
		'method': 'PUT',
		'path': postURL,
		'params': {
			'key': pubKey,
			'valueInputOption': 'USER_ENTERED'
		},
		'body': valueAsPayload
	});

    //Execute the API request.
    request.execute(function(response) {
    	console.log(response);
    });
}

//shows how to make a GET and parse the result
/*function increasePlayerWithGet(playerID) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

	var cell;

	//set the cell based on the playerID
	if (playerID == 1) {
		cell = "C4";
	}

	var range = sheetName + "!" + cell + ":" + cell;//main!B4:B4

	//TODO: you can reduce the number of requests by half if the value is stored on the frontend rather than retrieved with a GET each time
	var getURL = baseURL + "/values/" + range + "?key=" + pubKey;
	var postURL = baseURL + "/values/" + range;
	//send GET to the requestURL to get the value currently stored in the sheet
	$.get(getURL, function(data) {
		//parse data to get the value
		var value = parseInt(data.values[0][0]);
		value = value + 1;

		var valueAsPayload = {
			"range": range,
			"majorDimension": "ROWS",
			"values": [
			[value]
			],
		}
	});//end $.get()
}//end function*/

//Begin oAuth2.0 Code
var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
}

function initClient() {
    // Retrieve the discovery document for version 4 of Google Sheets API.
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
    	'apiKey': 'AIzaSyC9yqorompBJBsu0GBzsGwRd3AeUrTpu5Y',
    	'discoveryDocs': [discoveryUrl],
    	'clientId': '297524436414-0snahu2ge2lg2ujflv05bpumq6b2rbca.apps.googleusercontent.com',
    	'scope': SCOPE
    }).then(function () {
    	GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = GoogleAuth.currentUser.get();
      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $('#sign-in-or-out-button').click(function() {
      	handleAuthClick();
      }); 
      $('#revoke-access-button').click(function() {
      	revokeAccess();
      }); 
  });
}

function handleAuthClick() {
	if (GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked 'Sign out' button.
      GoogleAuth.signOut();
  } else {
      // User is not signed in. Start Google auth flow.
      GoogleAuth.signIn();
  }
}

function revokeAccess() {
	GoogleAuth.disconnect();
}

function setSigninStatus(isSignedIn) {
	var user = GoogleAuth.currentUser.get();
	var isAuthorized = user.hasGrantedScopes(SCOPE);
	if (isAuthorized) {
		$('#sign-in-or-out-button').html('Sign out');//remove this line eventually
		//$('#sign-in-or-out-button').css('display', 'none');//remove this line when you want to test on mobile
		$('#revoke-access-button').css('display', 'inline-block');
		$('#auth-status').html('You are currently signed in and have granted ' +
			'access to this app.');

		//display the scorekeeper view
		$('.container').css('display', 'inline');
	} else {
		//TODO: update this block. When someone is not signed in, should hide div.container again
		$('#sign-in-or-out-button').html('Sign In/Authorize');
		$('#revoke-access-button').css('display', 'none');
		$('#auth-status').html('You have not authorized this app or you are ' +
			'signed out.');
	}
}

function updateSigninStatus(isSignedIn) {
	setSigninStatus();
}

//end oAuth2.0 code
