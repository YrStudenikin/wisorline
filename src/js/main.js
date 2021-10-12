const whiteSections = ["about", "contains", "request"];

$(window).scroll(function () {
  let $sections = $('section, footer');
  $sections.each(function (i, el) {
    let top = $(el).offset().top - 100;
    let bottom = top + $(el).height();
    let scroll = $(window).scrollTop();
    let id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('.anchor-nav__link.anchor-nav__link--active').removeClass('anchor-nav__link--active anchor-nav__link--active-white');
      $('a.anchor-nav__link[href="#' + id + '"]').addClass('anchor-nav__link--active');
      if (whiteSections.some(item => item === id)) {
        $('a.anchor-nav__link[href="#' + id + '"]').addClass('anchor-nav__link--active-white');
      }
    }
  })
});

$(".anchor-nav").on("click", "a", function (event) {
  event.preventDefault();
  let id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});
