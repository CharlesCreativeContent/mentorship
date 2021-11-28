// Custom JavaScript Document
$(document).ready(function() {
    "use strict";
	
		// header transitions
		function headerSticky(){
			var windowPos=$(window).scrollTop();
			if( windowPos>20){
				$('.fixed-top').addClass("on-scroll");
				$('.navbar').addClass("navbar-light").removeClass("navbar-dark");
			} else {
				$('.fixed-top').removeClass("on-scroll");
				$('.navbar').addClass("navbar-dark").removeClass("navbar-light");
			}
		}
		headerSticky();
		$(window).scroll(headerSticky);

		// scrollspy
        $('body').scrollspy({
        	offset:	190,
            target:	'.dtr-scrollspy'
        });
		
		// nav scroll	
		var myoffset = $('#dtr-header-global').height();
		$('.navbar a[href^="#"]').click(function(){  
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - myoffset
			}, "slow","easeInSine");
		});
		
		// custom scroll link
		var customoffset = $('#dtr-header-global').height();
		$('.dtr-scroll-link').click(function(event){  
			event.preventDefault();    
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - customoffset
			}, "slow","easeInSine");
		});
	
 		// sticky tabs
		if ($(".dtr-sticky-tabs-wrapper").length > 0) {
			var tabs_container = $(".dtr-sticky-tabs-wrapper");
			var tabs_nav = $(".dtr-sticky-tabs-nav");
			var offset = tabs_container.offset().top;
			$(window).scroll(function(event) {
				var scroll = $(window).scrollTop();
				var total = tabs_container.height() + offset - 200;
				if (scroll > total) {
					tabs_nav.addClass('dtr-sticky-tabs-hide');
				}
				if (scroll < total) {
					tabs_nav.removeClass('dtr-sticky-tabs-hide');
				}
			});
		}

		// sticky tabs scroll 
		var taboffset = $('#dtr-header-global').height();
		$('.dtr-sticky-tabs li a').click(function(event){  
			event.preventDefault();    
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - taboffset - 100
			}, "slow","easeInSine");
		});
		
		// sectionAnchor
		function sectionAnchor() {
		var navoffset = $('#dtr-header-global').height();
			var hash = window.location.hash;
			if (hash !== '') {
				setTimeout(function() {
					$('html, body').stop().animate({
						scrollTop: $(hash).offset().top - navoffset - 20
					}, 800, 'easeInSine');
					history.pushState('', document.title, window.location.pathname);
				}, 500);
			}
		} sectionAnchor();

		// testimonial
		var swiper = new Swiper('.swiper-container.dtr-testimonial-carousel', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next.dtr-swiper-next',
				prevEl: '.swiper-button-prev.dtr-swiper-prev',
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			}
		});
		
		// blog
		var swiper = new Swiper('.swiper-container.dtr-blog-carousel', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			/* autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},*/
			navigation: {
				nextEl: '.swiper-button-next.dtr-swiper-next',
				prevEl: '.swiper-button-prev.dtr-swiper-prev',
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}
		});
		
		// bootstrap nav dropdown hover
		$(function(){
			$('.nav-item.dropdown').hover(function() {
				$('.dropdown-menu, .dropdown').addClass('show');
			},
			function() {
				$('.dropdown-menu, .dropdown').removeClass('show');
			});
		});
		
		// video popup
		$('.dtr-video-popup').venobox(); 
		
		// Custom Selects
		$(".dtr-select").select2({
    		minimumResultsForSearch: -1,
			dropdownAutoWidth: false,
		});

		//Contact form
		$(function () {
			var v = $("#contactform").validate({
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						target: "#result",
						clearForm: true
					});
				}
			});
		});
		//To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
		$('#contactform #message').val('');	
		
		// dropdown close on click
		$('.navbar-nav>li>a, .dropdown-item').on('click', function(){
    		$('.navbar-collapse').collapse('hide');
		});

}); // document ready