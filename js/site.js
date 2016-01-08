$( window ).load(function() {
	resizeAboutBoxes();
});

$( window ).resize(function() { 
	resizeAboutBoxes();
});

function resizeAboutBoxes () {
	if ($(window).width() > 1000)
	{
		var leftBox = $('#aboutBox-left');
		var rightBox = $('#aboutBox-right');

		if (rightBox.height() > leftBox.height()) 
		{
			var yoffset = (rightBox.height() - leftBox.height()) / 2;

			leftBox.css("position", "relative");
			leftBox.css("transform", "translateY(" + yoffset + "px)");
		}
	}
}