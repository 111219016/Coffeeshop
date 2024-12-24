// $(document).click(function (event) {
    
//     let testInput1 = $('.about-specials');
//     let testInput2 = $('footer');
//     if (!testInput1.is(event.target) && !testInput2.is(event.target))
//       $(".menu").slideUp();
// })



// google map color


//----------------------- ad ---------------------------------------------

    $(document).ready(function(){
        $('.carousel').slick({
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots:true,
            draggable: true,                    //滑鼠可以拖曳
            infinite: true,                     //無限輪播
            pauseOnHover: false,                 //滑鼠移過後暫停自動撥放
            pauseOnDotsHover: false,            //滑鼠移過圓點後暫停自動撥放
            rtl: false,                         //改變輪播方向
            vertical: false
        });
    });

    //控制翻頁的button 未重設
    $(document).ready(function( ){ 
        $('.slick-arrow').css('display', 'none'); 
    })
    //(768以下專屬)控制翻頁的下方點點 未重設
    $(document).ready(function( ){ 
        $('.slick-dots').css('display', 'none'); 
    })
    //兩個不需要的按鈕
    $(document).ready(function( ){ 
        $('#slick-slide-control00').css('display', 'none'); 
    })
    $(document).ready(function( ){ 
        $('#slick-slide-control01').css('display', 'none'); 
    })

//----------------------- end ad ---------------------------------------------

//----------------scroll trigger-----------------------------------
$(document).ready(function( ){ 
    gsap.registerPlugin(ScrollTrigger); 
})

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
  }
  
  function addClassToVisibleElements() {
    var aosElements = document.querySelectorAll(".aos");
    aosElements.forEach(function (aosElement) {
      if (!isElementInViewport(aosElement)) aosElement.classList.add("ed");
      else aosElement.classList.remove("ed");
    });
  }
  
  document.addEventListener("scroll", addClassToVisibleElements);
  addClassToVisibleElements();

