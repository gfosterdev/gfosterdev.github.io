function getData() {
	$.ajax({
		url: "http://localhost:8000/graphql",
		contentType: "application/JSON",
		method: "POST",
		data: JSON.stringify({
			query: `{
				projects {
				  edges {
					node {
					  title
					  projectMeta {
						projectFinished
						githubLink
					  }
					}
				  }
				}
			}`,
		}),
	})
		.done(function (result) {
			console.log("done");
			console.log(result);
			result.data.projects.edges.forEach((item) => {
				var d = item.node;
				var title = d.title;
				var link = d.projectMeta.githubLink;
				var finished = d.projectMeta.projectFinished;
				console.log(title, link, finished);
				var project = $("<div>");
				project.addClass("projectItem");
				project.append($("<h3>").html(title));
				// project.append($)
				$(".projectList").append(project);
			});
		})
		.fail(function () {
			console.log("fail");
		})
		.always(function () {
			console.log("always");
		});
}

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

	// Data access test from GraphQL endpoint
	getData();
});
