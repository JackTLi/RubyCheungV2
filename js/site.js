$( window ).load(function() {
	resizeAboutBoxes();
});

$(document).ready(function() {

	var navSliderWidth = $('.navSlider').width();
	var bgVisible = false;
	
	$('.navSlider').css("right", (-1 * navSliderWidth)+ 'px');

	$(".sliding-link").click(function(event) {
	    event.preventDefault();
	    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 700);
    } );

	document.querySelector( "#nav-toggle" )
	  .addEventListener( "click", function() {
	    this.classList.toggle( "active" );
	    if (this.classList.contains('active'))
	    {
	    	openNavSlider();
	    }
	    else {
	    	closeNavSlider();
	    }
	  });

	 $(".navSliderLink").click(function(event) {
	 	var href = $(this).attr('href');
	 	highlightMenuItemFromHref(href);
	 })

	 $(window).on('scroll', function() {
	 	    var y_scroll_pos = window.pageYOffset;
	 	    var scroll_pos = 400;          

	 	    if(y_scroll_pos > scroll_pos && !bgVisible) {
	 	        $(".navBackground").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0.9});
	 	        bgVisible = true;
	 	    }
	 	    else if (y_scroll_pos < scroll_pos && bgVisible)
	 	    {
	 	    	$(".navBackground").css({opacity: 0.9, visibility: "hidden"}).animate({opacity: 0.0});
	 	    	bgVisible = false;
	 	    }
	 	})
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

function openNavSlider () {
    var navSliderWidth = $('.navSlider').width();

	$('.navSlider').animate( {"right": 0 }, 300);
	$('.nav .links ul').animate( {"margin-right": navSliderWidth - 50}, 300);
	$('.navBackground').animate({"left": -1 * navSliderWidth}, 300);
}

function closeNavSlider () {
    var navSliderWidth = $('.navSlider').width();

	$('.navSlider').animate( {"right": (-1 * navSliderWidth) }, 300);
	$('.nav .links ul').animate( {"margin-right" : 0}, 300);
	$('.navBackground').animate({"left": 0}, 300);
}
