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
