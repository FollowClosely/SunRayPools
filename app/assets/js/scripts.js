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

		$('.hero').attr('style',
			'background: url(' + imgDir + hero1 + 
			'); background-size: cover; background-position: center center; transition: all 0.4s ease;');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner1a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner1b + '</span>');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header1 + '</h1>');

	});

	$('#hero02').on('click', function(e){
		e.preventDefault();

		$('.hero').attr('style',
			'background: url(' + imgDir + hero2 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');	
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header2 + '</h1>');
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner2a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner2b + '</span>');
	});

	$('#hero03').on('click', function(e){
		e.preventDefault();

		$('.hero').attr('style',
			'background: url(' + imgDir + hero3 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header3 + '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner3a + '</span>');

		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner3b + '</span>');

	});

	$('#hero04').on('click', function(e){
		e.preventDefault();
		$('.hero').attr('style',
			'background: url(' + imgDir + hero4 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header4 + '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner4a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner4b + '</span>');
	});




	$('#headshot01').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg01.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Sun Ray Pools took great care of us."</p>');
		$('.quote h6').replaceWith('<h6>Robert Smith, Rowlett</h6>');
		"Bob &amp; Diane are wonderful to work with. I highly recommend them. A 5 star treatment!"
	});

	$('#headshot02').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg02.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Another Good Review"</p>');
		$('.quote h6').replaceWith('<h6>The Beach Boys</h6>');
	});

	$('#headshot03').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg03.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"A+"</p>');
		$('.quote h6').replaceWith('<h6>The Carpenters</h6>');
	});

	$('#headshot04').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg04.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"And more reviews!"</p>');
		$('.quote h6').replaceWith('<h6>Jen Sale</h6>');
	});

	$('#headshot05').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg05.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Last featured testimonial."</p>');
		$('.quote h6').replaceWith('<h6>Declan Taintor</h6>');
	});

	$('.hs-li').on('click', function(){
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
      // $('body').addClass('modal-mask');
    } else {
      $('#nav-mobile').addClass('collapsed');
      // $('body').removeClass('modal-mask');
    }
  });



} );
