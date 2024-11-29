const $body = document.querySelector('body')
const mob_btn = document.querySelector('.mob_btn')
const $sec05 = document.querySelector('.sec05')


// 스크롤이 되면 헤더 배경색 들어감
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  //console.log(scroll)

  if(scroll > 80){
    $body.classList.add('scrolling')
  } else {
    $body.classList.remove('scrolling')
  }
})


// 햄버거버튼을 클릭
mob_btn.addEventListener('click',(e)=>{
  e.preventDefault()
  $body.classList.toggle('mOpen')
})


// sec05 카운트 함수를 화면이 보일때 작동
const io = new IntersectionObserver((s05)=>{
  if(s05[0].isIntersecting){
    countFunc()
  }
})
io.observe($sec05)


const $targets = document.querySelectorAll('section .text_wrap')
let io2 = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('ani')
    } else {
      entry.target.classList.remove('ani')
    }
  })
})
$targets.forEach(tw =>{
io2.observe(tw)
})