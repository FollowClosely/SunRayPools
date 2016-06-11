$( function() {
	var imgDir   = './assets/images/',
			hero1    = 'hero01.jpg',
			hero2    = 'hero02.jpg',
			hero3    = 'hero03.jpg',
			hero4    = 'hero04.jpg',
			header1  = 'It’s Summertime.',
			header2  = 'Get Wet.',
			header3  = 'Fire & Water.',
			header4  = 'Outdoor Living.',			
			banner1a = 'Download the Checklist &nbsp;&rarr;', 
			banner1b = '10 Tips for a Perfect Pool', 
			banner2a = 'Download the Report &nbsp;&rarr;', 
			banner2b = '11 Tips for a Perfect Spa', 
			banner3a = 'Download the Blueprint &nbsp;&rarr;', 
			banner3b = '12 Tips for a Perfect Firepit', 
			banner4a = 'Download the How-To Guide &nbsp;&rarr;', 
			banner4b = '13 Tips for a Perfect Patio', 
			quote1   = 'reviewbg01.jpg',
			quote2   = 'reviewbg02.jpg',
			quote3   = 'reviewbg03.jpg',
			quote4   = 'reviewbg04.jpg',
			quote5   = 'reviewbg05.jpg';


	$('#hero-ul a').on('click', function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});

	$('#hero01').on('click', function(e){
		e.preventDefault();

		$('#hero').attr('style',
			'background: url(' + imgDir + hero1 + 
			'); background-size: cover; background-position: center center; transition: all 0.4s ease;');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner1a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner1b + '</span>');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header1 + '</h1>');

	});

	$('#hero02').on('click', function(e){
		e.preventDefault();

		$('#hero').attr('style',
			'background: url(' + imgDir + hero2 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');	
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header2 + '</h1>');
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner2a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner2b + '</span>');
	});

	$('#hero03').on('click', function(e){
		e.preventDefault();

		$('#hero').attr('style',
			'background: url(' + imgDir + hero3 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header3 + '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner3a + '</span>');

		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner3b + '</span>');

	});

	$('#hero04').on('click', function(e){
		e.preventDefault();
		$('#hero').attr('style',
			'background: url(' + imgDir + hero4 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header4 + '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner4a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner4b + '</span>');
	});




	$('#quote01').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg01.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Sun Ray Pools took great care of us."</p>');
		$('.quote h6').replaceWith('<h6>Robert Smith, Rowlett</h6>');
		"Bob &amp; Diane are wonderful to work with. I highly recommend them. A 5 star treatment!"
	});

	$('#quote02').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg02.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Another Good Review"</p>');
		$('.quote h6').replaceWith('<h6>The Beach Boys</h6>');
	});

	$('#quote03').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg03.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"A+"</p>');
		$('.quote h6').replaceWith('<h6>The Carpenters</h6>');
	});

	$('#quote04').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg04.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"And more reviews!"</p>');
		$('.quote h6').replaceWith('<h6>Jen Sale</h6>');
	});

	$('#quote05').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg05.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Last featured testimonial."</p>');
		$('.quote h6').replaceWith('<h6>Declan Taintor</h6>');
	});

	$('.quo-li').on('click', function(){
		$('li.active').removeClass('active');
		$(this).addClass('active');
	});

	
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 600); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });

	$(window).scroll(function() {
	  var sticky = $('.sticky'),
	    scroll = $(window).scrollTop();

	  if (scroll >= 440) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
  
  $('.mobile-menu').click(function(){
    if ($('#nav-mobile').hasClass('collapsed')) {
      $('#nav-mobile').removeClass('collapsed');
    } else {
      $('#nav-mobile').addClass('collapsed');
    }
  });


  $('.fancybox').fancybox();


  var icons = new Skycons({
  	'color':'#0074E4',
  	'resizeClear': true
  }),
    list  = [
      "clear-day", "clear-night", "partly-cloudy-day",
      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
      "fog"
    ],
    i;

	for(i = list.length; i--; )
	  icons.set(list[i], list[i]);

	icons.play();

	// console.log(list);


// http = require('http');

var apiKey = 'bd7804a56f5a4248bfa222108162405';

var options = {
  host: 'api.apixu.com',
  port: 80,
  path: '/v1/current.json?key=' + apiKey + '&q=',
  method: 'GET'
};



function currentWeather(query, callback){
	options.path = '/v1/current.json?key=' + apiKey + '&q=' + query;
	http.request(options, function(res) {
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
		console.log(chunk);
	  });
	  res.on('end', function (chunk) {
	  });
	}).on('error', function(err) {
        // handle errors with the request itself
        console.error('Error with the request:', err.message);
        callback(err);
    }).end();
}




	// var weather = require('./weatherlib');

	errorHandler = function (){
		console.log('got some error')
	}
	
	//current weather takes pin code or location as first parameter, error handler callback as second
	// weather.currentWeather(75089, errorHandler);


	// forecast_request = $.get('https://api.forecast.io/forecast/e10266c0c6a480f436825e391c6df16f/32.5359,-97.3128', function(f){
	// 	console.log(f);
	// });


	// forecast_request = $.ajax({
	// 	type: 'GET',
	// 	url: 'https://api.forecast.io/forecast/e10266c0c6a480f436825e391c6df16f/32.5359,-97.3128',
	// 	dataType: 'json',
	// 	success: function(data){
	// 		console.log(data);
	// 	},
	// 	error: function(){
	// 		console.log(error);
	// 	}
	// });
		






	// { current.temp_f }

	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", "http://api.apixu.com/v1/current.json?key=bd7804a56f5a4248bfa222108162405&q=75089", true);
	// // Add your code below!
	// xhr.send();
	// console.log(xhr.status);
	// console.log(xhr.statusText);


} );
