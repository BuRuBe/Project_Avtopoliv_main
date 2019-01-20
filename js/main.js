$(document).ready(function(){
	var touch = $('#TouchMenu');
	var menu = $('.nav');
	var wid = $(window).width();
	if(wid < 765){
		$('#communication').addClass('communicationMobile');
	} else {
		$('#communication').removeClass('communicationMobile');
	}
	if(wid < 765){
		$('#schedule').addClass('scheduleMobile');
	} else {
		$('#schedule').removeClass('scheduleMobile');
	}
	if(wid < 765){
		$('#map').addClass('mapMobile');
	} else {
		$('#map').removeClass('mapMobile');
	}

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if(height > 80){
			$("nav").addClass('fixed');
		} else{	
			$("nav").removeClass('fixed');
		}
	});

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$('.servicesBox').mouseover(function(){
		$(this).addClass('noBlur');
		$('.servicesBox').addClass('blurBox');
	});
	
	$('.servicesBox').mouseleave(function(){
		$('.servicesBox').removeClass('blurBox');
		$('.servicesBox').removeClass('noBlur');
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
		if(wid < 765){
			$('#communication').addClass('communicationMobile');
		} else {
			$('#communication').removeClass('communicationMobile');
		}
		if(wid < 765){
			$('#schedule').addClass('scheduleMobile');
		} else {
			$('#schedule').removeClass('scheduleMobile');
		}
		if(wid < 765){
			$('#map').addClass('mapMobile');
		} else {
			$('#map').removeClass('mapMobile');
		}
	});
	var slidesMarket = document.querySelectorAll('#slidesMarket .slideMarket');
	var currentSlideMarket = 0;
	var slideMarketInterval = setInterval(nextSlideMarket,3000);

	function nextSlideMarket() {
		slidesMarket[currentSlideMarket].className = 'slideMarket';
		currentSlideMarket = (currentSlideMarket+1)%slidesMarket.length;
		slidesMarket[currentSlideMarket].className = 'slideMarket showing';
	}

	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,5000);
	var next = document.getElementById('next');
	var previous = document.getElementById('previous');
	var playing = true;
	var pauseButton = document.getElementById('pause');

	next.onclick = function() {
		nextSlide();
	};
	previous.onclick = function() {
		previousSlide();
	};
	function nextSlide() {
		goToSlide(currentSlide+1);
	}

	function previousSlide() {
		goToSlide(currentSlide-1);
	}

	function goToSlide(n) {
		slides[currentSlide].className = 'slide';
		currentSlide = (n+slides.length)%slides.length;
		slides[currentSlide].className = 'slide showing';
	}

	
    /*Массив картинок
    var image_array = [
    'https://sergey-oganesyan.ru/wp-content/uploads/2017/01/11.jpg',
    'https://sergey-oganesyan.ru/wp-content/uploads/2017/01/21.jpg',
    'https://sergey-oganesyan.ru/wp-content/uploads/2017/01/31.jpg',
    'https://sergey-oganesyan.ru/wp-content/uploads/2017/01/41.jpg',
    'https://sergey-oganesyan.ru/wp-content/uploads/2017/01/51.jpg',
    ];
     
    var image_num = 1;
 
    function slide() { 
         
        $('.slideshow img').animate({opacity: 0.4}, 500).attr('src',image_array[image_num]).animate({opacity: 1}, 500);
        image_num++;
         
        if( image_num == image_array.length ){
            image_num = 0;
        }
     
    }
    setInterval(slide, 3000);*/
  });


