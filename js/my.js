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
		$('#sign-in-or-out-button').html('Sign out');
		$('#revoke-access-button').css('display', 'inline-block');
		$('#auth-status').html('You are currently signed in and have granted ' +
			'access to this app.');
	} else {
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