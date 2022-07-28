/*burger */
$('.burger__menu').click(function() {
   $('.menu__burger--content').toggleClass('burger__active')
   $(this).toggleClass('burger__krest')

}) 

/*burger end*/

$('.star__img').click(function() {
   $(this).addClass('toggleClass').prevAll('.star__img').addClass('toggleClass');
});

$('.star__img').click(function() {
   $(this).nextAll('.star__img').removeClass('toggleClass');
});