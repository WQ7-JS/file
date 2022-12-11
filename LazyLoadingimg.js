var url = "https://filesc.github.io/js/99-DogStories.js";
$.getScript(url, function () {
    if (externaljs == 'https://filesc.github.io/js/lazyloading.html-99-DogStories') {
        var monitor = setInterval(function () {
            var elem = document.activeElement;
            if (elem && elem.tagName == 'IFRAME') {
                setTimeout(function () {
                    $("#supVid").remove()
                }, 500);
                $(document).ready(function () {
                    $("#IDVid")[0].src += "&autoplay=1;&showinfo=0";
                    ev.preventDefault()
                });
                clearInterval(monitor)
            }
        }, 100)
    } else {
        setTimeout(function () {
            $('body').remove()
        }, 500)
    }
});