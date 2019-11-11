var $ = require('jquery');

window.fetIncr = 0;
window.experienceIncr = 0;
window.fetDecr = 0;
window.experienceDecr = 0;

$(document).ready(() => {

	
	$('div#fet').mouseenter(() => {
		if(window.fetIncr < 1)
		{
			$('div#fet > div.fetHeader').fadeIn(2000).css('display', 'flex').slideToggle(7000);
			window.fetIncr++;
		}	
	});
		

	$('div#experience').mouseenter(() => {
		if(window.experienceIncr < 1)
		{
			$('div#sfda > div.experienceHeader').fadeIn(2000).css('display', 'flex').slideToggle(5000);
			$('div#itr > div.experienceHeader').fadeIn(2000).css('display', 'flex').slideToggle(6000);
			$('div#mentor > div.experienceHeader').fadeIn(2000).css('display', 'flex').slideToggle(7000);
			window.experienceIncr++;
		}
	});

	$('div#fet').mouseleave(() => {
		if(window.fetDecr < 1)
		{
			$('div#fet > div.fetHeader').fadeOut(500).css('display','none');
			window.fetDecr++;
		}
	});

	$('div#experience').mouseleave(() => {
		if(window.experienceDecr < 1)
		{
			$('div#sfda > div.experienceHeader').fadeOut(500).css('display', 'none');
			$('div#itr > div.experienceHeader').fadeOut(500).css('display', 'none');
			$('div#mentor > div.experienceHeader').fadeOut(500).css('display', 'none');
			window.experienceDecr++;
		}
	});

	$('a#homeLink').click(() => {

		$('div.home').addClass('shift');

		setTimeout(() => {
			$('div.home').removeClass('shift');
		}, 2000);

		$('div#navigatorMini').css('display', 'none', 'transition', 'all 1s ease-out');
		$('button#showNavigatorMini').css('display', 'block', 'transition', 'all 1s ease-in');
		$('button#showLinksMini').css('display', 'block', 'transition', 'all 1s ease-in');

		$('#logo').fadeIn(1000).css('display', 'block', 'transition', 'all 4s ease-in 0.5s');

		$('#about').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');
		$('#careers').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');
		$('#contact').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');
	});

	$('a#aboutLink').click(() => {

		$('div.home').addClass('shift');

		setTimeout(() => {
			$('div.home').removeClass('shift');
		}, 2000);

		$('div#navigatorMini').css('display', 'none', 'transition', 'all 1s ease-out');
		$('button#showNavigatorMini').css('display', 'block', 'transition', 'all 1s ease-in');
		$('button#showLinksMini').css('display', 'block', 'transition', 'all 1s ease-in');
		(async function(){
			const a = await function(){ 
				return $('#about').fadeIn(1000).css('display', 'block', 'transition', 'all 4s ease-in 0.5s')
			};

			const b = await function(){ 
				return $('#logo').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s')
			};
			const c = await function(){ 
				return $('#careers').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s')
			};
			const d = await function(){ 
				return $('#contact').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s')
			};

			a();b();c();d();
		})()
		// $('#about').fadeIn(1000).css('display', 'block', 'transition', 'all 4s ease-in 0.5s');

		// $('#logo').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');
		// $('#careers').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');
		// $('#contact').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');		
	});

	$('a#careersLink').click(() => {

		$('div.home').addClass('shift');

		setTimeout(() => {
			$('div.home').removeClass('shift');
		}, 2000);

		$('div#navigatorMini').css('display', 'none', 'transition', 'all 1s ease-out');
		$('button#showNavigatorMini').css('display', 'block', 'transition', 'all 1s ease-in');
		$('button#showLinksMini').css('display', 'block', 'transition', 'all 1s ease-in');
		
		$('#careers').fadeIn(1000).css('display', 'block', 'transition', 'all 4s ease-in 0.5s');

		$('#logo').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');
		$('#about').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');
		$('#contact').fadeOut(1000).css('display', 'none', 'transition', 'all 4s ease-out 0.5s');	
	});

	$('a#contactLink').click(() => {

		$('div.home').addClass('shift');

		setTimeout(() => {
			$('div.home').removeClass('shift');
		}, 2000);

		$('div#navigatorMini').css("display", "none");
		$('button#showNavigatorMini').css("display", "block");
		$('button#showLinksMini').css("display", "block");

		$('#contact').fadeIn(1000).css('display', 'block');

		$('#logo').fadeOut(1000).css('display', 'none');
		$('#about').fadeOut(1000).css('display', 'none');
		$('#careers').fadeOut(1000).css('display', 'none');	
	});
});