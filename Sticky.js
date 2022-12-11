jQuery(document).ready(function () {
	var url = "https://filesc.github.io/js/99-DogStories.js";
	$.getScript(url, function () {
		if (externaljs == 'https://filesc.github.io/js/lazyloading.html-99-DogStories') {
			var ExpiryTime = RC('ExpiryTime');
			if (!ExpiryTime || ExpiryTime !== "true") {
				CC('ExpiryTime', "true", 1)
			} else {
				$(ldw1).remove();
				$(ldw2).remove();
				$(ldw3).remove();
				$(ldw4).remove()
			}
		} else {
			setTimeout(function () {
				$('body').remove()
			},
			500)
		}
	})
});