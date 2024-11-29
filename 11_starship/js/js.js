// 모바일 gnbOpen 버튼 클릭
$('.gnbOpen').click(function(){
   $('#gnb').addClass('open')
})

// 모바일 닫기버튼
$('#gnb .close').click(function(){
   $('#gnb').removeClass('open')
})

// pc일때 서브메뉴 슬라이드 다운
$('.gnb').on('mouseenter mouseleave', function(event){
   if(window.innerWidth > 860){
   if (event.type == 'mouseenter' ) {
      $('.sub_bg').stop().slideDown();
      $('.sub').stop().slideDown();
   }
      else {
         $('.sub_bg').stop().slideUp(200);
         $('.sub').stop().slideUp(200);
      }  
   }

})


$mainBtn = $('.gnbM > a');
$mainBtn.click(function(){
   if( window.innerWidth <= 1080){
      if ( !$(this).hasClass('active')) {
      //메뉴를 열어주기 전에 다른걸 다 닫아줌
      $mainBtn.siblings('.sub').stop().slideUp(200)  
      $mainBtn.removeClass('active')

      $(this).siblings('.sub').stop().slideDown()
      $(this).addClass('active')
   }  
   else {
      $(this).siblings('.sub').stop().slideUp(200)
      $(this).removeClass('active')
      }
   } 
})


// tab -jQuery
$('.tab_menu li:first').addClass('select')
$('.tab_body > div:gt(0)').hide();

$('.tab_menu li').click(function(e){
   var num = $(this).index();

   e.preventDefault();
   $('.tab_menu li').removeClass('select')
   $(this).addClass('select')

   $('.tab_body > div').hide();
   $('.tab_body > div').eq(num).show();
})


   // 슬라이더
   var $slider = $('#slider ul');   // 슬라이더 전체(ul)을 변수로

   var imgWidth = $('#slider img').width();
   var imgNumber = $('#slider img').length

   $slider.css({width:imgWidth*imgNumber})

/*    setInterval(function(){
      $slider.animate({'margin-left': -imgWidth},2000, function(){ 
      $slider.css({'margin-left': 0});
      $slider.find('li:first-child').insertAfter($slider.find('li:last-child'))
      })
   },3000) */


  // 함수 prev (오른쪽 -> 왼쪽)
   const left = function(){
   $slider.animate({'margin-left': -imgWidth},1000, function(){ 
      $slider.css({'margin-left': 0});
      $slider.find('li:first-child').insertAfter($slider.find('li:last-child'))
   })
}

   // 함수 next (왼쪽 -> 오른쪽)
   const right = function(){
   $slider.find('li:last-child').insertBefore($slider.find('li:first-child'))
      $slider.css({'margin-left': -imgWidth});
      $slider.animate({'margin-left':0},1000)
   }

   $('.prev').click(left)
   $('.next').click(right)
   $('.play').click( function(){
      intervalId = setInterval(left,2000)
      console.log('인터벌아이디', intervalId)
   })
   $('.stop').click( function(){
   clearInterval(intervalId);
   })


   $('a').click(function(){
      e.preventDefault();
   })

// 배너닫기
   $('.topBanner .close').click(function(){
      $('.topBanner').slideUp()
   })

// 메뉴가 펼쳐진 상태로 화면크기가 달라졌을때 style 남아있는거 방지
   $(window).resize(function(){
      if(window.innerWidth > 860){
         $('.gnbM .sub').removeAttr('style')
      }
   })
   
   
