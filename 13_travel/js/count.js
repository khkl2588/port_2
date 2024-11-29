
function countFunc(){
  document.querySelectorAll('.count').forEach(countElement => {
    const updateCount = () => {
        const target = +countElement.getAttribute('data-count');
        let current = 0;
        const increment = target / 200; // Adjust the speed of the counting
  
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
                countElement.classList.add('completed'); // Add completed class for styling
            }
            countElement.textContent = Math.floor(current);
        }, 10); // Adjust for smoother animation
    };
  
    updateCount();
  });
}

countFunc()

/* 
  챗 GTP를 이용한 카운터 애니메이션
  질문: 
  <span class="count" data-count="500"></span><br>
  <span class="count" data-count="7"></span><br>
  <span class="count" data-count="20"></span><br>
  <span class="count" data-count="200"></span><br>

  0부터 data-count속성값까지 증가하는 값이 span에 애니메이션으로 표시
*/