$(document).ready(function () {
  // Initially display .competitions section
  $(".opportunityElements div").css("display", "flex");
	

  $(".nav-item").click(function () {
    // Remove active class from all nav items
    $(".nav-item").removeClass("active");
    // Add active class to the clicked nav item
    $(this).addClass("active");

    var classes = $(this).attr("class").split(" ");
    var buttonClass = classes[1].split("_")[0];

    // Display the corresponding section
    $("." + buttonClass).css("display", "flex");
    // Hide other sections
    $(".opportunityElements > div").not("." + buttonClass).css("display", "none");
  });
});


// Fetching data from socialImpact.json
fetch("socialImpact.json")
  .then((response) => response.json())
  .then((data) => {
    let competitionsHTML = " ";
    let fellowshipsHTML = " ";
    let forumsHTML = " ";
    let articlesHTML = " ";
    let podcastsHTML = " ";
    data.Competitions.forEach((competition) => {
      competitionsHTML += `<div class="border border-3 m-2 p-2">
							<a href="${competition.Link}" target="_blank" class="title"><h2 >${
        competition["Competition Name"]
      }</h2></a>
							<p>Objective: ${competition.Objective}</p>
							<div class="d-flex gap-3">
							<p class="dateS"><b>Start Date:</b> ${competition["Start Date"]}</p>
							<p class="dateD"><b>Deadline:</b> ${
                competition["Deadline"] || "Not specified"
              }</p>
							</div>
							</div>
							`;
    });
    data.Fellowships.forEach((fellowship) => {
      fellowshipsHTML += `
						<div class="border border-3 m-2 p-2">
						<a href="${fellowship.Link}" target="_blank" class="title"><h2>${
        fellowship["Fellowship Name"]
      }</h2></a>
						<p>Objective: ${fellowship.Mission}</p>
						<div class="d-flex gap-3">
						<p class="dateS">Start Date: ${fellowship["Application Start Date"]}</p>
						<p class="dateD"><b>Deadline: </b>${fellowship.Deadline || "Not specified"}</p>
						</div>
						</div>
						`;
    });

    data.Podcasts.forEach((podcast) => {
      podcastsHTML += `
						<div class="border border-3 m-2 p-2">
					<a href="${podcast["Podcast Link"]}" target="_blank" class="title"><h2>${podcast["Podcast Name"]}</h2></a>
					<a href="${podcast["Host Organisation Link"]}" target="_blank" class="subTitle"><p>${podcast["Podcast Host Organisation"]}</p></a>
					<p>About: ${podcast.About}</p>
					</div>
					`;
    });

    data.Forums.forEach((forum) => {
      forumsHTML += `
					<div class="border border-3 m-2 p-2">
				<a href="${forum["Forum Link"]}" target="_blank" class="title"><h2>${forum["Forum"]}</h2></a>
				<p>Forum Purpose: ${forum["Forum Purpose"]}</p>
				</div>
				`;
    });

    data.Articles.forEach((article) => {
      articlesHTML += `
			<div class="border border-3 m-2 p-2">
			<a href="${article["Article Link"]}" target="_blank" class="title"><h2>${article["Article Name"]}</h2></a>
			<a href="${article["Host Organisation Link"]}" target="_blank"  class="subTitle"><p>${article["Host Organisation"]}</p></a>
			<p>About: ${article.About}</p>
			</div>
			`;
    });

    $(".competitions").html(competitionsHTML);
    $(".fellowships").html(fellowshipsHTML);
    $(".forums").html(forumsHTML);
    $(".articles").html(articlesHTML);
    $(".podcasts").html(podcastsHTML);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
