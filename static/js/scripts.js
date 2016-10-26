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