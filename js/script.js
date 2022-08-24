$(function(){
    $('.banner-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });
      $('.main-row-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
      $('.slider-main-wrape').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:".left",
        nextArrow:".right",
      });
      $('.img-top').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
      $('.timer_running').counterUp({
        delay: 10,
        time: 3000
    }); 
    //===navbar sticky menu start===// 
    $(window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 300){
        $(".navbar").addClass("sticky-menu")
      }else{
        $(".navbar").removeClass("sticky-menu")
      }
      if(top > 400){
        $(".back-to-top").fadeIn(300)
      }else{
        $(".back-to-top").fadeOut(400)
      }
    })
    //===navbar sticky menu end===//  
    //===back to top jquery start===//
		$(".back-to-top").click(function(){
        $("html,body").animate({scrollTop:0 }, 1000)
		})
    
    //===back to top jquery end===// 


    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'grid'
  });





  // $(window).scroll(function(){
  //   var top = $(this).scrollTop()
  //   if(top > 300){
  //     $(".nav-link").addClass(".active")
  //   }
  //   else{
  //     $(".nav-link").removeClass(".active")
  //   }
  // });
  //===scroll spy start===//
var scrollLink = $('.nav-link');
$(scrollLink).on('click', function(event){
  enent.preventDefault();
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top - 20
  }, 1000);
});
$(Window).on('scroll', function(){
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function(){
    var sectionhead = $(this.hash).offset().top -500;
    if(scrollTop >= sectionhead){
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  })
})



  //===scroll spy end===//

  //===cross hamber menu start===//
  $('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
  //===cross hamber menu end===//
  
})