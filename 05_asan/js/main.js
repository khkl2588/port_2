const lnb_btn = document.querySelector('.lnb_btn')
const lnb_btnImg = document.querySelector('.lnb_btn img')

const search_btn = document.querySelector('.search_btn')
const search_btnImg = document.querySelector('.search_btn img')

const wrap = document.querySelector('#wrap')
const cover = document.querySelector('.cover')

console.log(lnb_btn)

const openAndClose = function(){
   if ( !wrap.classList.contains('on')) {
      wrap.classList.add('on')
      lnb_btnImg.setAttribute('src', 'img/bg_header_lnb_active.png')
   }
   else { 
      close()
   }
}

const close = function() {
   wrap.classList.remove('on')
   lnb_btnImg.setAttribute('src', 'img/bg_header_lnb.png')
}

lnb_btn.onclick = function(){
   openAndClose()
}

cover.addEventListener('click', close)



search_btn.addEventListener('click', function(){
   if(!wrap.classList.contains('searchActive')){
   wrap.classList.add('searchActive')
   search_btnImg.setAttribute('src', 'img/img_topSerchCancel.png')
   }
   else {
      wrap.classList.remove('searchActive')
      search_btnImg.setAttribute('src', 'img/img_topSerch.png')
   }
})




// sub페이지 prev버튼
const prevBtn = document.querySelector('.prev')

const prevFunc = function(){
   window.history.back()
}

prevBtn.onclick = prevFunc; 
prevBtn.addEventListener('click', prevFunc);

