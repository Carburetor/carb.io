$('button').on('click', function() {
  $('.overlay').fadeIn();
  $('form').children('input')[0].focus();
});

function reset_forms() {
  $(".interestee-name").val("");
  $(".interestee-email").val("");
  $(".interestee-company").val("");
  $('.overlay').fadeOut();
}

var target_product = "carb.io";

$(".start-form").on("click", function (e) {
  elem = e.currentTarget
  target_product = $(elem).attr("data-interestee-target");
});

$(".signup-form").on("submit", function (e) {
  alert("Thanks for your interest!  We will reach out soon.")
});

  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });

  $(".getstarted").click(function() {
    $("#interestee-name").focus();
  });

  $('.overlay-closer').on('click', function() {
    $('.overlay').fadeOut();
  });

  $('.play').on('click', function() {
    $('.video-overlay').fadeIn();
    $('.video-wrap').html('<iframe id="carb-vid" src="https://fast.wistia.net/embed/iframe/f6hkux2glw?autoPlay=1" width="100%" height="100%" data-ratio="0.5625" class="videoframe"></iframe>');
  });

  $('.video-overlay').on('click', function() {
    $('.video-overlay').fadeOut();
    $('.video-wrap').html('');
  });

  function resizeVideo() {
    cv = $("#carb-vid")
    ratio = cv.attr("data-ratio");
    width = cv.width();
    cv.height(width*ratio);
  }

  $(window).resize(function() {
    resizeVideo();
  });

  resizeVideo();
