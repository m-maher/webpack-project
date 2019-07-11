import $ from 'jquery'

import './style.css'

require('./styleSass.scss')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

//Button Up 

$(document).ready(function(){
    $("#btnUp").click(function(){
        $("body").animate({scrollTop:'0'},1000);            
    }) 
})

// Loading

$(document).ready(function(){
$("body").css("overflow","hidden");
  $("#loading .spinner").fadeOut(2000,function(){
    $("#loading").fadeOut(1000,function(){
      $("body").css("overflow","auto");
    })
  })
})

//Navbar

$(window).scroll(function(){
    
    var windowScroll = $(window).scrollTop();

    if(windowScroll > 200){
        $(".navbar").css("backgroundColor",'rgba(0,0,0,0.7)').
        css('border','none');
        $("#btnUp").css("display","block");            
    }
    else{
        $(".navbar").css("backgroundColor","transparent").
        css('border-bottom','solid 1px #868e96');        
        $("#btnUp").css("display","none");            
    }
})


$(".navbar-toggler").click(function(){
    $(".navbar").css('backgroundColor', 'rgba(0,0,0,0.7)');
})


//Navbar links

$(".navbar li a").click(function(){

    var h = $(this).attr("href")  ;
    var off = $(h).offset().top;
    $("body,html").animate({scrollTop:off},1000)  
   
})

//Home

$(document).ready(function(){
    $(".slider").slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
    });
});

$('.next').click(function(){
    $(".slider").slick('slickNext');
});

$('.prev').click(function(){
    $(".slider").slick('slickPrev');
});

//Read more link

$(".home .caption a").click(function(){

    var h = $(this).attr("href")  ;
    var off = $(h).offset().top;
    $("body,html").animate({scrollTop:off},1000)    
})

//Counter

$(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 800) {
                $(window).off("scroll", startCounter);
            $('.Count').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

//Team slider

$(document).ready(function(){
    $('.tests').owlCarousel({
        responsiveClass:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            770:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 
})

//Brands slider

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({ 
        loop:true,      
        responsiveClass:true,
        autoHeight:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        margin:30,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6,
                loop:true
            }
        }
    })
})

// Contact Form

var inps = document.getElementsByTagName("input");

var regex = {

    username:/^[A-Za-z]{3,8}$/,
    usermail: /^\w+[-_.]{0,1}\w+@[a-z0-9]+(\.[a-z]{2,6}){1,3}$/,
    subject:/^[A-Za-z]{3,}$/
}

for(var i = 0; i < inps.length;i++){

    inps[i].addEventListener("keyup",function(e){
    validate(e.target,regex[e.target.attributes.name.value]);
    })
}

function validate(inp ,reg){

    if(reg.test(inp.value) == true){
        inp.className = "form-control is-valid";
    }
    else{
        inp.className = "form-control is-invalid";
    }
}
