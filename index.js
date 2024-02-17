// Function to create the tabs
$(document).ready(function() {
	$(".nav-item").click(function() {
			var classes = $(this).attr('class').split(' ');
			var buttonClass = classes[1].split('_')[0];
			console.log(buttonClass);

			$('.' + buttonClass).css("display", 'block');
			$(".opportunityElements > div").not('.' + buttonClass).css("display", 'none');
	});
});

// Fetching data from socialImpact.json
fetch('socialImpact.json')
	.then(response => response.json())
	.then(data => {
		let competitionsHTML = ' ';
		let fellowshipsHTML = ' ';
		let forumsHTML = ' ';
		let articlesHTML = ' ';
		let podcastsHTML = ' ';
			data.Competitions.forEach(competition => {
					competitionsHTML += 
							`
							<a href="${competition.Link}" target="_blank"><h2 class="title">${competition['Competition Name']}</h2></a>
							<p>Objective: ${competition.Objective}</p>
							<div class="d-flex gap-3">
							<p class="dateS"><b>Start Date:</b> ${competition['Start Date']}</p>
							<p class="dateD"><b>Deadline:</b> ${competition['Deadline'] || 'Not specified'}</p>
							</div>
							`
			});
			data.Fellowships.forEach(fellowship => {
				fellowshipsHTML += 
						`
						<a href="${fellowship.Link}" target="_blank"><h2 class="title">${fellowship['Fellowship Name']}</h2></a>
						<p>Objective: ${fellowship.Mission}</p>
						<div class="d-flex gap-3">
						<p class="dateS">Start Date: ${fellowship['Application Start Date']}</p>
						<p class="dateD"><b>Deadline: </b>${fellowship.Deadline|| 'Not specified'}</p>
						</div>
						`
		});

		data.Podcasts.forEach(podcast => {
			podcastsHTML += 
						`
					<a href="${podcast['Podcast Link']}" target="_blank"><h2 class="title">${podcast['Podcast Name']}</h2></a>
					<a href="${podcast['Host Organisation Link']}" target="_blank"><p class="subTitle">${podcast['Podcast Host Organisation']}</p></a>
					<p>About: ${podcast.About}</p>
					`
	});

	data.Forums.forEach(forum => {
		forumsHTML += 
					`
				<a href="${forum['Forum Link']}" target="_blank"><h2 class="title">${forum['Forum']}</h2></a>
				<p>Forum Purpose: ${forum['Forum Purpose']}</p>
				`
});

	data.Articles.forEach(article => {
		articlesHTML += 
			`
			<a href="${article['Article Link']}" target="_blank"><h2 class="title">${article['Article Name']}</h2></a>
			<a href="${article['Host Organisation Link']}" target="_blank"><p class="subTitle">${article['Host Organisation']}</p></a>
			<p>About: ${article.About}</p>
			`
	})


			$(".competitions").html(competitionsHTML);
			$(".fellowships").html(fellowshipsHTML);
			$(".forums").html(forumsHTML);
			$(".articles").html(articlesHTML);
			$(".podcasts").html(podcastsHTML);
	})
	.catch(error => {
			console.error('Error fetching data:', error);
	});
