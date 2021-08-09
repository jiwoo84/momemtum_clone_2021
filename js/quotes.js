const quotes = [
  {
    quote:
      "여자는 재산과 방해받지 않고 창작할 수 있는 '자기만의 방'을 가져야 한다.",
    author: "버지니아 울프",
  },
  {
    quote: "난 자살하지 않을거야. 우리는 죽은 이들을 너무 빨리 잊거든.",
    author: "아르게리트 유흐세나",
  },
  {
    quote: "뭉치자 엉키자 다투지 말자. 내 나라 새 역사(役事)에 조약돌이 되자.",
    author: "이쾌대",
  },
  {
    quote:
      "나는 고유한 생물학적 몸이 아니라, 물이 끓듯 매순간 의미를 생성하고 휘발하는 투쟁의 장소이며 외부와 구별될 수 없는 존재이다.",
    author: "정희진",
  },
  {
    quote:
      "예술은 이론을 가지고 되는 문제가 아니다. 천진무구한 인품에서만이 영원불변한 향기로운 예술이 생성될 것임을 절감한다.",
    author: "윤형근",
  },
  {
    quote: "질문하는 자에게만 답을 주어라",
    author: "부처",
  },
  {
    quote:
      "인생에서 가장 중요한 건 타인에게 기대지 않는 것이며, 모든 것은 너의 마음먹기에 달려 있다는 사실을 잊지 마라",
    author: "비행사 김경오",
  },
  {
    quote:
      "모든 사람은 죽기 전에 자신이 왜, 어디서, 어디로 가고 있는지 알기 위해 노력해야 한다.",
    author: "제임스 서버",
  },
  {
    quote:
      "사랑, 인생, 그 어떤 식으로든 의미있는 것, 아니면 최소한 그걸 찾으려는 노력.",
    author: "연극 <프라이드>",
  },
  {
    quote: "용기는 무섭지 않은 게 아니라 무섭지만 계속 나아가는 것이다.",
    author: "Angie Thomas",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
