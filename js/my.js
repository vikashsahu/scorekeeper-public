$("a").click(function() {
	var score = parseInt($("a").text());
	score = score + 1;
	$("a").text(score);
});