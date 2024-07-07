// 상수
const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';

// 쿼리 셀렉터
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const helloUser = document.querySelector('#hello-user');
const helloUserString = helloUser.querySelector('h4');

// 함수
function paintGreetings() {
    const username = localStorage.getItem('username');
    helloUserString.innerText = `안녕하세요~ ${username}님!`;
    helloUser.classList.remove(HIDDEN_CLASS);
}

// localStorage에 username이 저장되어 있는지 확인 후 분기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    paintGreetings();
}

// 로그인하기
function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreetings();

}

loginForm.addEventListener('submit', onLoginSubmit);

// 로그아웃하기
function onLogoutSubmit(event) {
    event.preventDefault();

    localStorage.removeItem(USERNAME_KEY);

    loginForm.classList.remove(HIDDEN_CLASS);
    helloUser.classList.add(HIDDEN_CLASS);
}

helloUser.querySelector('button').addEventListener('click', onLogoutSubmit);

// a 태그 기본 동작 막기
const link = document.querySelector('a');

function handleMovePage(event) {
    event.preventDefault();
}

link.addEventListener('click', handleMovePage);
