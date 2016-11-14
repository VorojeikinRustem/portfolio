$('.lang-own').click(function(){
	$('.lang-own').removeClass('active');
	$(this).addClass('active');
});

$('.ui.accordion')
  .accordion()
;

// Avatar animation
$('.header > .column > img.left')
  .transition({
    animation : 'pulse',
    reverse   : true,
    interval  : 200
  })
;

// Portfolio
$('.special.cards .image').dimmer({
  on: 'hover'
});

// Modal
$('.modal-test').click(function(){
	$('.ui.modal')
	  .modal('show')
	;
});

// Dropdown contact form
$('.ui.dropdown')
  .dropdown()
;

// Animate scroll to links. Swap active item on menu
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var headerHeight = $('.own-header').outerHeight(),
        target = this.hash, 
        $target = $(target),
        $menuItem = $('.own-header .menu > a');
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - headerHeight
     }, 500, 'swing', function () {
     window.location.hash = target;
     });
    $menuItem.removeClass('active');
    $(this).addClass('active');
    
    
 });
