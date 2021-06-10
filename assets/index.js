$(document).ready( () => {

  var owl = $('.owl-carousel');

  owl.owlCarousel({
    center: true,
    items:3,
    loop: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });

  $('#owl-left').click( () => { owl.trigger('prev.owl.carousel') })
  $('#owl-right').click( () => { owl.trigger('next.owl.carousel') })
  $('.carousel-container').click( () => { owl.trigger('stop.owl.autoplay') })

  renderView()
  $(window).resize( renderView() )

  $('.slide-button').hover( function() {
    $(this).find("img").stop()
    $(this).find("img").animate({"left": $(this)[0].offsetWidth * -0.9}, 500)
  }, function() {
    $(this).find("img").stop()
    $(this).find("img").animate({"left": ""}, 500)
  })
  // #endregion

  // #region Utility Handlers
  $('*[link]:not(.competency)').click( function() {
    window.open($(this).attr("link"), "_blank")
  })

  Array.from(document.querySelectorAll('*[pic]')).forEach( elem => {
    elem.style.backgroundImage = `url("${elem.getAttribute("pic")}")`
  })
  // #endregion

  $('.competency').click( function() {
    $(this).toggleClass("flipped")
  })

  $('#profile-img').click( function() {
    $(this).css({filter: `hue-rotate(${Math.floor(Math.random() * 360)}deg)`})
  })
});

const renderView = function() {
  Array.from(document.getElementsByClassName('slide-button')).forEach( sBtn => {
    sBtn.style.height = `${sBtn.offsetWidth / 2.5}px`
    sBtn.querySelector('img').style.height = `${sBtn.offsetHeight - 4}px`
  })

  Array.from(document.getElementsByClassName('competency')).forEach( c => { c.style.height = `${c.offsetWidth}px`; })

  $('.stars').each( (i,s) => {
    if(s.textContent == "⭐⭐⭐⭐⭐") {
      $(s).addClass("glowy");
    }
  })
}