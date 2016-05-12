$( function() {
	var imgDir   = './assets/images/',
			hero1    = 'hero01.jpg',
			hero2    = 'hero02.jpg',
			hero3    = 'hero03.jpg',
			hero4    = 'hero04.jpg',
			header1  = 'It\'s Summertime.',
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
			'); background-size: cover; background-position: center center; transition: all 0.4s ease;');	
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

	

	/**
	 * Main menu.
	 */
	var mainMenu = $( ".sf-menu" );

	// Create the responsive menu by cloning the existing one.
	mainMenu.clone().removeClass().addClass( "rwd-menu" ).prependTo( ".navbar-container nav" );

	// Initialize the superfish menu.
	// mainMenu.superfish();

	// Toggle the responsive menu.
	$( "#rwd-trigger" ).on( "click", function( e ) {
		e.preventDefault();

		$( ".rwd-menu" ).slideToggle();
	} );



	/**
	 * Animations.
	 */
	$( "#demo-animations" ).find( ".demo-col" ).on( "click", function() {
		var $this = $( this );

		$this.addClass( "animated " + $this.text() );
	} );



	/**
	 * Tabs.
	 */
	$( ".tabs-links a" ).on( "click", function( e ) {
		e.preventDefault();

		// Get the target tab.
		var newTab = $( this ).attr( "href" );

		// Show the targeted tab content while hiding the rest.
		$( newTab ).show().siblings().hide();

		// Add the active class to the parent list item while removing it from the rest.
		$( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
	} );



	/**
	 * Accordions.
	 */
	$( ".accordion-element-title" ).on( "click", function( e ) {
		e.preventDefault();

		// Get the target accordion.
		var targetAccordion = $( this ).attr( "href" );

		// Collapse all accordion elements.
		$( ".accordion-element-title" ).removeClass( "active" );
		$( ".accordion-element-content" ).hide();

		// Show the targeted element only.
		$( this ).addClass( "active" );
		$( targetAccordion ).show();
	} );
} );
