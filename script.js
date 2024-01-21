// Task 1 - Цветовое бинго - цвет блока меняется раз в 100 мс

const colors = document.getElementsByClassName('colors')[0];

function c() {
    let hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).substr(-2);
}
let timer = setInterval(function timer() {
    let myColor = ("#"+c()+c()+c());
    colors.style.backgroundColor = myColor;

    colors.addEventListener('click', () => {
  document.getElementsByClassName('text')[0].innerHTML = myColor;
});
return myColor;
}, 100);

colors.addEventListener('click', () => {
  clearInterval(timer);
});

// Task 2 - Кнопка, познавшая жизнь - кнопка с подсчетом количества кликов, при частоте клика менее 1 с - блокируется

const button = document.getElementsByClassName('button')[0];
let clicks = 0;
let currentTime = new Date().getTime();

button.onclick = function() {
  ++clicks;
  const clickTime = new Date().getTime();
  if(clickTime - currentTime <= 1000)
  {
    clicks = 0;
    button.disabled = true;
    setTimeout(() => {
    button.disabled = false;
  }, 1000)}

  currentTime = clickTime;
  console.log(clicks);
}