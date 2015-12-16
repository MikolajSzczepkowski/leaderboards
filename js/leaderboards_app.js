$(function (){
	var pageWidth = $(document).width();
	$(document).on("click", ".table-leaderboard thead tr th", function(){
		if (!$(this).hasClass("active")) {
			$(".table-leaderboard thead tr th").removeClass("active");
			$("#changeOrder").remove();
			$(this).addClass("active");
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
	$(document).on("click", ".table-leaderboard tbody tr", function(){
		if (!$(this).hasClass("selected")) {
			$(".table-leaderboard tbody tr").removeClass("selected");
			$(this).addClass("selected");
		}
	});
});