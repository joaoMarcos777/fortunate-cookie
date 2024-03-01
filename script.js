const fortunates = [
  "In times of challenge, find strength in your inner resilience.",
  "Patience is a key that unlocks many doors on life's journey.",
  "Smile at the mirror and see how happiness returns to you.",
  "Great dreams start with small steps; take the first one today.",
  "True wisdom lies in learning something new every day.",
  "Believe in the power of your dreams; they shape your destiny.",
  "Generosity builds bridges that can lead to unexpected surprises.",
  "In moments of doubt, listen to the voice of your heart; it always guides right.",
  "Beauty is in the eyes of the beholder; find beauty around you.",
  "Fear not the changes; often, they bring growth.",
  "Embrace the journey, for it is the path to self-discovery.",
  "Seeds of kindness blossom into flowers of joy.",
  "Celebrate small victories, for they pave the way to greater triumphs.",
  "The more you give, the richer your life becomes.",
  "Find peace in the present; it is the gift that transcends time.",
  "Discover the magic in every moment; it's the secret to a fulfilling life.",
  "Cherish the connections you make, for they enrich the tapestry of your story.",
  "Let go of what you can't change; embrace what you can, and make it beautiful.",
  "Courage is not the absence of fear but the triumph over it; face your fears bravely.",
  "Dance in the rain of uncertainty; it often brings the most beautiful rainbows.",
];

const btnOpenCookie = document.querySelector("#btnOpenCookie");
const btnOpenAnotherCookie = document.querySelector("#btnOpenAnotherCookie");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortune = document.querySelector(".fortune");

let randomNumber = 0;

btnOpenCookie.addEventListener("click", handleOpenCookieClick);
btnOpenAnotherCookie.addEventListener("click", handleOpenAnotherCookieClick);

function handleOpenCookieClick() {
  displayFortuneMessage();
  toogleScreen();
}

function handleOpenAnotherCookieClick() {
  toogleScreen();
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function generateRandomNumber() {
  randomNumber = Math.round(Math.random() * 19);
  return randomNumber;
}

function selectFortuneMessageByNumber() {
  const fortuneNumber = Number(generateRandomNumber());

  let fortuneMessage = fortunates.filter(
    (fortune, index) => fortuneNumber == index
  );

  return fortuneMessage;
}

function displayFortuneMessage() {
  const message = selectFortuneMessageByNumber();
  fortune.innerHTML = message[0];
}
