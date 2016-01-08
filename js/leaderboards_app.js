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
	$(document).on("click", "#gamesSlider ul li", function(){
		if (!$(this).hasClass("current-game")) {
			$("#gamesSlider ul li").removeClass("current-game");
			$(this).addClass("current-game");
		}
	});
	$(document).on("click", ".leaderboard-menu #firstMenu a", function(){
		if (!$(this).hasClass("active")) {
			$(".leaderboard-menu #firstMenu a").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(document).on("click", ".leaderboard-menu #secondMenu a", function(){
		if (!$(this).hasClass("active")) {
			$(".leaderboard-menu #secondMenu a").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(document).on("click", ".search-leaderboard button", function(){
		if (!$(this).hasClass("selected")) {
			$(".search-leaderboard button").removeClass("selected");
			$(this).addClass("selected");
		}
		if ($("#search-leaderboard-user").hasClass("selected")) {
			$("#searchLeaderboard div input").attr("placeholder","Search user...");
		}
		else if ($("#search-leaderboard-clan").hasClass("selected")) {
			$("#searchLeaderboard div input").attr("placeholder","Search clan...");
		}
	});
});