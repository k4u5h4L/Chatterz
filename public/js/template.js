(function($) {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

	// left menu toggle 
	$('.light-dark-toggle').on('click', function () {
		$(this).toggleClass('active')
	});

	// rightbar toggle div
	$('.rightbar .rightbar-link').on('click', function () {
		$('.rightbar').addClass('open')
	});
	$('.rightbar .close-sidebar').on('click', function () {
		$('.rightbar').removeClass('open')
	});

	// click chat user details
	$('.chat-body .show-user-detail').on('click', function () {
		$('.main ').toggleClass('open-chat-sidebar')
	});
	$('.close-chat-sidebar').on('click', function () {
		$('.main ').removeClass('open-chat-sidebar')
	});

	// click chat user details
	$('.chat-body .add-user-btn').on('click', function () {
		$('.main ').toggleClass('open-user-sidebar')
	});
	$('.close-chat-sidebar').on('click', function () {
		$('.main ').removeClass('open-user-sidebar')
	});


	// responsive layout sidebar open toggle class js
	$('.sidebar-toggle-btn').on('click', function () {
		$('body ').toggleClass('open-sidebar-menu')
	});

	// color theme js
    $(document).ready(function() {
		// Color Theme js
        $('.choose-skin li').on('click', function() {
			var $body = $('#layout');
			var $this = $(this);
	  
			var existTheme = $('.choose-skin li.active').data('theme');
	
			$('.choose-skin li').removeClass('active');
			$body.removeClass('theme-' + existTheme);
			$this.addClass('active');
			var newTheme = $('.choose-skin li.active').data('theme');
			$body.addClass('theme-' + $this.data('theme'));
		});
	});

	//Collapse or Expand Menu
	$(document).ready(function() {
		$('.menu-toggle').on('click', function(e) {
			var $this = $(this);
			var $content = $this.next();

			if ($($this.parents('ul')[0]).hasClass('list')) {
				var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

				$.each($('.menu-toggle.toggled').not($not).next(), function(i, val) {
					if ($(val).is(':visible')) {
						$(val).prev().toggleClass('toggled');
						$(val).slideUp();
					}
				});
			}

			$this.toggleClass('toggled');
			$content.slideToggle(320);
		});
	});

	// mini calendar js 
	$('#mini-calendar').datepicker({
		todayHighlight: true,
		beforeShowDay: function(date){
			if (date.getMonth() == (new Date()).getMonth())
				switch (date.getDate()){
				case 4:
					return {
					tooltip: 'Example tooltip',
					classes: 'active'
					};
				case 8:
					return false;
				case 12:
					return "green";
			}
		}
	});	

	// Light/Dark
	var toggleSwitch = document.querySelector('.light-dark-toggle input[type="checkbox"]');
	var currentTheme = localStorage.getItem('theme');
	if (currentTheme) {
		document.documentElement.setAttribute('data-theme', currentTheme);

		if (currentTheme === 'dark') {
			toggleSwitch.checked = true;
		}
	}
	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
		else {document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}    
	}
	toggleSwitch.addEventListener('change', switchTheme, false);

})(jQuery);