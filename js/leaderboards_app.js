$(function (){
	var pageWidth = $(document).width();
	$(document).on("click", ".table-leaderboard thead tr th", function(){
		if (!$(this).hasClass("current")) {
			$(".table-leaderboard thead tr th").removeClass("current");
			$("#changeOrder").remove();
			$(this).addClass("current");
			if (pageWidth>=640) {
				$(this).append("<img id='changeOrder' src='images/arrow-up.png'>");
			}
		}
		else {
			$("#changeOrder").toggleClass("change-order");
		}
	});
	$(document).on("click", "#chooseGameSlider ul li", function(){
		var title = $(this).find("a h5 span").text();
		if (!$(this).hasClass("current-game")) {
			$("#chooseGameSlider ul li").removeClass("current-game");
			$(this).addClass("current-game");
		}
		$("#gameCriterion").text(title);
	});
	$(document).on("click", ".leaderboard-menu #firstMenu a", function(e){
		e.preventDefault;
		var title = $(this).attr("title");
		if (!$(this).hasClass("active")) {
			$(".leaderboard-menu #firstMenu a").removeClass("active");
			$(this).addClass("active");
		}
		$("#playerCriterion").text(title);
	});
	$(document).on("click", ".leaderboard-menu #secondMenu a", function(e){
		e.preventDefault;
		var title = $(this).attr("title");
		if (!$(this).hasClass("active")) {
			$(".leaderboard-menu #secondMenu a").removeClass("active");
			$(this).addClass("active");
		}
		$("#consoleCriterion").text(title);
	});
	$(document).on("click", ".search-leaderboard button", function(e){
		e.preventDefault();
		if (!$(this).hasClass("selected")) {
			$(".search-leaderboard button").removeClass("selected");
			$(this).addClass("selected");
		}
		if ($("#search-leaderboard-user").hasClass("selected")) {
			$("#searchLeaderboard div input").attr("placeholder","Search user...");
		}
		else if ($("#search-leaderboard-clan").hasClass("selected")) {
			$("#searchLeaderboard div input").attr("placeholder","Search team...");
		}
	});
});