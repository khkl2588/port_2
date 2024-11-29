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