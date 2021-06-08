$(document).ready( () => {

  renderView()
  $(window).resize( renderView() )

  // #region Slide Buttons
  $('.slide-button').hover( function() {
    $(this).find('img').stop();
    $(this).find('img').animate({left: "-90%"})
  },function() {
    $(this).find('img').stop();
    $(this).find('img').animate({left: "0"})
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
}