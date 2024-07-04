// 제목 색깔 빨 > 파 > 빨...
const h1 = document.querySelector('div.hello:first-child h1');

function handleMouseClick() {
    // // none css
    // const currentColor = h1.style.color;
    // let newColor = currentColor === "red" ? "blue" : "red";
    // 
    // h1.style.color = newColor;

    // // css 활용
    // h1.className = h1.className === "warning" ? "success" : "warning";

    
    let coloringTo = h1.classList.contains('warning') ? 'success' : 'warning';
    let coloredFrom = coloringTo === 'warning' ? 'success' : 'warning';
    // // 기존에 있는 class이름 보존
    // h1.classList.replace(coloredFrom, coloringTo);

    // 함수 사용
    h1.classList.toggle(coloredFrom);
    h1.classList.toggle(coloringTo);
}

h1.addEventListener("click", handleMouseClick);

// +버튼 누르면 숫자 하나씩 증가
const h1_cnt = document.querySelector('.count');
const button = document.getElementById('btn');
let count = 0;

function handleBtnClick() {
    count += 1;
    h1_cnt.innerText = count;
}

button.addEventListener("click", handleBtnClick);

