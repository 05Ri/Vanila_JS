const quotes = [
    {
        quote: '개인에게서 광기를 찾아보기는 힘들다. 그러나 집단, 당파, 민족, 시대 등에는 거의 예외없이 광기가 존재한다.',
        author: '프레드리히 니체',
    },
    {
        quote: '시간을 도구로 사용할 뿐, 시간에 의존해서는 안된다.',
        author: '존 F. 케네디',
    },
    {
        quote: '어떤 것이 당신이 계획대로 되지 않는 다고 해서 그것이 불필요한 것은 아니다.',
        author: '토마스 A. 에디슨',
    },
    {
        quote: '지금이 제일 비참하다고 할 수 있는 동안은 아직 제일 비참한 게 아니다.',
        author: '윌리엄 셰익스피어',
    },
];

const displayQuote = document.querySelector('#quote span:nth-child(1)');
const displayAuthor = document.querySelector('#quote span:nth-child(3)');

const index = Math.floor(Math.random() * 10) % quotes.length;
const objQuote = quotes[index];
displayQuote.innerText = objQuote.quote;
displayAuthor.innerText = objQuote.author;