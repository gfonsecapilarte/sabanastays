(function($) {
	"use strict";

	/*
	 * Customly Styled Select input field
	 */
	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	/*
	 * Click to show details of a booking
	 */
	$(".booking-detail .btn-main").click(function(){
		var button = $(this);
		button.parent("div").siblings(".mg-features").slideToggle("400", function() {
			if($(this).is(":visible")){
				button.text("Close Details");
			}
			else{
				button.text("View Details");
			}
		});
	});

	/*
	 * On Parallax for .parallax class
	 */
	$('.parallax').parallax("50%", 0.2);

	/*
	 * Custom Data Fixed
	 */
	$('.beactive').addClass('active');
	$('.beactive').removeClass('beactive');

	$('.btn-next-tab').click(function (e) {

		e.preventDefault();

		// console.log($($(this).attr('href')));
		$(this).tab('show');

		$('html, body').animate({
			scrollTop: $(".mg-booking-form").offset().top - 100
		}, 300);

		$('a[href="'+$(this).attr('href')+'"]').parents('li').trigger('click');
		$('.mg-booking-form > ul > li.active').removeClass('active');
		$('a[href="'+$(this).attr('href')+'"]').parents('li').addClass('active');
	});

	$('.btn-prev-tab').click(function (e) {

		e.preventDefault();

		// console.log($($(this).attr('href')));
		$(this).tab('show');

		$('html, body').animate({
			scrollTop: $(".mg-booking-form").offset().top - 100
		}, 300);

		$('a[href="'+$(this).attr('href')+'"]').parents('li').trigger('click');
		$('.mg-booking-form > ul > li.active').removeClass('active');
		$('a[href="'+$(this).attr('href')+'"]').parents('li').addClass('active');
	});


	/*
	 * Owl Carousel for Testimonials
	 */
	$("#mg-testimonial-slider").owlCarousel({
		navigation : true,
		singleItem : true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		transitionStyle : "backSlide"

	});

	/*
	 * Owl Carousel for Client Logo (Small 3 items Only)
	 */
	$("#mg-part-logos").owlCarousel({
		items : 3,
		itemsDesktop: [1199,3],
		navigation : true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

	});

	/*
	 * Owl Carousel for Client Logo (Full 5 items Only)
	 */
	$("#mg-part-logos-full").owlCarousel({
		items : 5,
		navigation : true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

	});

	/*
	 * Owl Carousel for Blog post
	 */
	$(".mg-post-images-slider").owlCarousel({
		singleItem : true,
		navigation : true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

	});

	/*
	 * Owl Carousel for Gallery
	 */
	var sync1 = $("#mg-gallery");
	var sync2 = $("#mg-gallery-thumb");
	sync1.owlCarousel({
		navigation : true,
		singleItem : true,
		pagination: false,
		afterAction : syncPosition,
		navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],

	});

	sync2.owlCarousel({
		items : 3,
		itemsDesktop: [1199,3],
		itemsDesktopSmall: [979,3],
		itemsTablet: [768,3],
		itemsMobile: [479,3],
		navigation : false,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		afterInit : function(el){
			el.find(".owl-item").eq(0).addClass("synced");
		}

	});

	function syncPosition(el){
		var current = this.currentItem;
		$("#mg-gallery-thumb")
		.find(".owl-item")
		.removeClass("synced")
		.eq(current)
		.addClass("synced")
		if($("#mg-gallery-thumb").data("owlCarousel") !== undefined){
			center(current)
		}
	}

	sync2.on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});

	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
			if(num === sync2visible[i]){
				var found = true;
			}
		}

		if(found===false){
			if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			}else{
				if(num - 1 === -1){
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if(num === sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
			sync2.trigger("owl.goTo", num-1)
		}

	}



	/*
	 * Room Search form Check in and out Datepicker
	 */
	$('.input-group.mg-check-in').datepicker({
		startDate: "dateToday",
		autoclose: true,
		format: "yyyy-mm-dd"
	});

	$('.input-group.mg-check-in').on('hide', function (e) {


		if (e.dates.length) {
			var strDate = e.date;
			strDate.setDate(strDate.getDate() + 1);

			// $('.mg-check-out').datepicker('clearDates');
			$('.mg-check-out').datepicker('setStartDate', strDate);
		}

		$(e.currentTarget).removeClass('focus');

	});

	$('.input-group.mg-check-in').on('show', function (e) {

		$(e.currentTarget).addClass('focus');

	});

	$('.input-group.mg-check-out').on('show', function (e) {

		$(e.currentTarget).addClass('focus');

	});

	$('.input-group.mg-check-out').on('hide', function (e) {

		$(e.currentTarget).removeClass('focus');

	});

	$('.input-group.mg-check-in').on('changeDate', function (e) {

		if (e.dates.length) {
			var inDate = e.date,
				outDate = $('.mg-check-out').datepicker('getDate');

			if (outDate && inDate >= outDate) {
				$('.mg-check-out').datepicker('clearDates');
			}

		} else {
			$('.mg-check-out').datepicker('clearDates');
		}
	});

	$('.input-group.mg-check-out').datepicker({
		startDate: "dateToday",
		autoclose: true,
		format: "yyyy-mm-dd"
	});


	// Sticky Header
	$(window).ready(function () {
		sticky_check(this);
	});
	$(window).scroll(function() {
		sticky_check(this);
	});

	$(window).resize(function() {
		sticky_check(this);
	});

	function sticky_check ($this) {
		if ($(window).width() >= 767) {
			if ($($this).scrollTop() > 150){
				if (!$('.sticky-on-fixed').length && !$('.header.sticky').hasClass('transp') ) {
					$('body').prepend('<div class="sticky-on-fixed" style="height:'+$('.header.sticky').height()+'px"></div>');
				};

				$('.header.sticky').addClass("sticky-on");
			}
			else{
				$('.header.sticky').removeClass("sticky-on");

				$('.sticky-on-fixed').remove();
			}
		} else {
			$('.header.sticky').removeClass("sticky-on");
			$('.sticky-on-fixed').remove();
		}
	}

	/*
	 * Single room review ratting
	 */
	$('#mg-star-position').on('starrr:change', function(e, value){
		$('#mg-star-position-input').val(value);
	});

	$('#mg-star-comfort').on('starrr:change', function(e, value){
		$('#mg-star-comfort-input').val(value);
	});

	$('#mg-star-price').on('starrr:change', function(e, value){
		$('#mg-star-price-input').val(value);
	});

	$('#mg-star-quality').on('starrr:change', function(e, value){
		$('#mg-star-quality-input').val(value);
	});

	/*
	 * Nivo Lightbox for gallery
	 */
	$('.mg-gallery-item a').nivoLightbox({ effect: 'fadeScale' });

})(jQuery);

$(window).load(function () {
	/*
	 * Gallery Filter with Shuffle
	 */
	var $grid = $('#mg-grid'),
		$sizer = $grid.find('.shuffle__sizer'),
		$filterType = $('#mg-filter input[name="filter"]');

	$grid.shuffle({
		itemSelector: '.mg-gallery-item',
		sizer: $sizer
	});

	$grid.shuffle('shuffle', $('#mg-filter input[name="filter"]:checked').val());

	$('label.btn-main').removeClass('btn-main');
	$('input[name="filter"]:checked').parent().addClass('btn-main');

	$filterType.change(function(e) {
		var group = $('#mg-filter input[name="filter"]:checked').val();

		$grid.shuffle('shuffle', group);

		$('label.btn-main').removeClass('btn-main');
		$('input[name="filter"]:checked').parent().addClass('btn-main');
	});
});

/*
 * Preloader
 */
$(window).load(function () {
	$('.preloader').fadeOut("slow");
});
