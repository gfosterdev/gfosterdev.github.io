$(document).ready(function () {
	$("#menu").click(function () {
		$(this).toggleClass("fa-times");
		$(".navbar").toggleClass("nav-toggle");
	});

	$(window).on("scroll load", function () {
		$("#menu").removeClass("fa-times");
		$(".navbar").removeClass("nav-toggle");
	});

	$("#linkedin").click(function () {
		var win = window.open(
			"https://www.linkedin.com/in/george-foster-777360144/",
			"_blank"
		);
		if (win) {
			win.focus();
		} else {
			alert("Please allow popups for this website.");
		}
	});
});
