

var dataType; 
var dataSrc;
var panoramaID; 
var slickIndex;

$(document).ready(function () {
  /*Initializing details slider*/ 
  $('.big-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,  
    asNavFor: '.slider-thumbnails', 
    centerMode: false,
    dots: false,
    draggable: false,
    prevArrow: false, 
    nextArrow: false,
    infinite: false,
    focusOnSelect: true, 
    rtl: isRtl,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          draggable: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10px',
          focusOnSelect: true,
          swipe: false,
          swipeToSlide: false,
          nextArrow: '<i class="fa fa-chevron-left"></i>',
          prevArrow: '<i class="fa fa-chevron-right"></i>'
        }
      }
    ]
  });

  function checkMediaCount() {
    if (mediaCount <= 3) {
      return false;
    }
    else {
      return true
    }
  }


  $('.slider-thumbnails').slick({
    slidesToShow: 3.2,
    asNavFor: '.big-slide',
    swipeToSlide: checkMediaCount(),
    slidesToScroll: 4,
    touchThreshold: 3,
    edgeFriction: 0,
    focusOnSelect: true,
    swipe: false,
    dots: false,
    arrows: true,
    infinite: false,
    rtl: isRtl,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          swipe: true
        }
      }
    ]
  });




  $(".big-slide").on("beforeChange", function (event, slick) {
    var currentSlide, slideType, player, command;

    //find the current slide element and decide which player API we need to use.
    currentSlide = $(slick.$slider).find(".slick-current");

    //determine which type of slide this, via a class on the slide container. This reads the second class, you could change this to get a data attribute or something similar if you don't want to use classes.
    slideType = currentSlide.attr("class").split(" ")[1];

    //get the iframe inside this slide.
    player = currentSlide.find("iframe").get(0);


    if (slideType == "vimeo") {
      command = {
        "method": "pause",
        "value": "true"
      };
    } else {
      command = {
        "event": "command",
        "func": "pauseVideo"
      };
    }

    //check if the player exists.
    if (player != undefined) {
      //post our command to the iframe.
      player.contentWindow.postMessage(JSON.stringify(command), "*");
    }
  });

  $('.clickable-carousel').on('click', function () {
    dataType = $(this).data('type');
    dataSrc = $(this).data('src');
    slickIndex = $(this).data('slick-index');
  })


  $('.panorama-container').each(function (index) {
    dataType = $(this).data('type');
    dataSrc = $(this).data('src');
    panoramaID = "panorama" + index;

    panoramaInit(panoramaID, dataSrc);
  });
  $('.slick-arrow').text("");

});

$(window).on('load', function () {
  $(".loaderSlider").fadeOut('slow')
})

//Panorama Register
var panoramaImg = null;

function panoramaInit(panoramaID, dataSrc) {
  for (var key in dataSrc.scenes) {
    dataSrc.scenes[key].autoLoad = true;
  }
  panoramaImg = pannellum.viewer(panoramaID, dataSrc);
}

function checkMedia() {

  if (dataType === "panoramaimage") {
    panoramaInit();
  }
}


$('.fullscreen-btn').click(function (e) {
  e.preventDefault();
  var currentImg = $('.big-slide .slick-current img').data('src');
  var currentImgCaption = $('.big-slide .slick-current img').data('caption');

  if (currentImgCaption.length) {
    $(".gallery-modal .modal-content .fullscreen-caption").show();
    $(".gallery-modal .modal-content .fullscreen-caption").html(currentImgCaption);
  }
  else {
    $(".gallery-modal .modal-content .fullscreen-caption").hide(); 
  }
  

  $(".gallery-modal .modal-content img").attr('src', currentImg);

})


//window.addEventListener('resize', function () {
//    if (screen.width === window.innerWidth) {
//        //$('.slider-thumbnails').slick('slickGoTo', slickIndex - 2);
//        $('.slider-thumbnails').slick("slickSetOption", "slidesToScroll", -1);
//    }
//});

