
//the array that we'll use for undo
var stack = [];

//temporary function that only increases
//the number on the frontend
//without making an api request
function incP1Temp() {
	//log "1" on the stack for undo
	stack.push("1");

	increasePlayer(1);
}

//temporary function that only increases
//the number on the frontend
//without making an api request
function incP2Temp() {
	//log "2" on the stack for undo
	stack.push("2");

	increasePlayer(2);
}

function undo() {
	if (stack.length > 0) {

		//the value on the stack will be the ID of the player
		//for ex. player 4 will be 4, so the value won't just be 1 or 2
		//thus, we can determine the index of the cell (valueRange)
		//to decrement based only on the topmost value on the stack

		var topElement = stack.pop();
		if (topElement == "1") {
			var score = parseInt($("a#p1").text());
			score = score - 1;
			$("a#p1").text(score);

			//api code
			var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
			var sheetName = "main";
			var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

			var cell = "C4";

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


} else if (topElement == "2") {
	var score = parseInt($("a#p2").text());
	score = score - 1;
	$("a#p2").text(score);

			//api code
			var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
			var sheetName = "main";
			var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

			var cell = "C5";

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
} else {
		//error...
		console.log("error in popping stack");
	}
} else {
	console.log("the score's 0-0, can't undo");
}
}

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

//sets both scores and set counts to zero, on the view only
//and clears the stack
function resetMatchView() {
	$("a#p1").text("0");//reset p1 score
	$("a#p2").text("0");//reset p2 score
	$("#p1Sets").text("0");//reset p1sets
	$("#p2Sets").text("0");//reset p2sets
	stack = [];//clear the stack
}

function zeroOutGameScore(matchID) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";
	var valueRange;

	if (matchID == 1) {
		valueRange = "C4:C5";
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

//resets current game score and sets
//Match 1: Player 1, Player 2
function reset(matchID) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

	var rangeOne;
	var rangeTwo;

	//update the view
	resetMatchView();

	//will need to update this to have conditionals for all N matches
	if (matchID == 1) {
		rangeOne = "B4";
		rangeTwo = "C5";
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

function increaseSet(matchID, playerID, setScore) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";
	var cell;

	console.log("matchID: " + matchID);
	console.log("playerID: " + playerID);

	//update this conditional to have logic for all matchIDs
	if (matchID == 1) {
		if (playerID==1) {
			cell = "B4";
		} else if (playerID==2) {
			cell = "B5";
		} else {
			console.log("error in increaseSet, matchid=1");
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

function increasePlayer(playerID) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

	var cell;
	var score;

	//set the cell based on the playerID
	if (playerID == 1) {
		cell = "C4";
	} else if (playerID == 2) {
		cell = "C5";
	} else if (playerID == 3) {
		cell = "C10";
	} else if (playerID == 4) {
		cell = "C11";
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

/*function increasePlayerWithGet(playerID) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

	var cell;

	//set the cell based on the playerID
	if (playerID == 1) {
		cell = "C4";
	} else if (playerID == 2) {
		cell = "C5";
	} else if (playerID == 3) {
		cell = "C10";
	} else if (playerID == 4) {
		cell = "C11";
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

		//this will need to be modified to have other playerIDs
		if (playerID==1) {
			$("a#p1").text(value);
		} else if (playerID==2) {
			$("a#p2").text(value);
		}

		var valueAsPayload = {
			"range": range,
			"majorDimension": "ROWS",
			"values": [
			[value]
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
    	'apiKey': 'AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0',
    	'discoveryDocs': [discoveryUrl],
    	'clientId': '651150583918-pcnvjcgd6803ph6hrm08ft7tg47na46t.apps.googleusercontent.com',
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
