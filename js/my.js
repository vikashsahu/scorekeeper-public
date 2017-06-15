$(document).ready(function() {
	$("a#p1").click(function() {
		var score = parseInt($("a#p1").text());
		score = score + 1;
		$("a#p1").text(score);
	});
	
	$("a#p2").click(function() {
		var score = parseInt($("a#p2").text());
		score = score + 1;
		$("a#p2").text(score);
	});
});

//resets the scores of a match, not the sets
function reset(matchID) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

	var rangeOne;
	var rangeTwo;

	if (matchID == 1) {
		rangeOne = "B4";
		rangeTwo = "B5";
	}

	var range = sheetName + "!" + rangeOne + ":" + rangeTwo;//main!B4:B5

	var postURL = baseURL + "/values/" + range;

	var valueAsPayload = {
		"range": range,
		"majorDimension": "COLUMNS",
		"values": [
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

//TODO: rewrite this function to take in a parameter, playerName, and set the range based on this param.
function increasePlayer(playerID) {
	var baseURL = "https://sheets.googleapis.com/v4/spreadsheets/1Ipd_1vkwHtCQdj1zcNyzTRFil1CclmyufVqr4vIP8MI";
	var sheetName = "main";
	var pubKey = "AIzaSyAsmkXes_MzqYAjAO_J9gooiwolUoZl5M0";

	var cell;

	//set the cell based on the playerID
	if (playerID == 1) {
		cell = "B4";
	} else if (playerID == 2) {
		cell = "B5";
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
}//end function

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
		//$('#sign-in-or-out-button').html('Sign out');//remove this line eventually
		$('#sign-in-or-out-button').css('display', 'none');//remove this line when you want to test on mobile
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
