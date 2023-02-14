const classAnim = document.querySelectorAll(".text-anim");
let animTab = [];
let count = 0;
let textInterval;
for (let i = 0; i < classAnim.length; i++) {
  animTab = classAnim[i].innerHTML.split("");
  classAnim[i].innerHTML = "";
  function textAnim() {
    if (count < animTab.length) {
      classAnim[i].innerHTML += animTab[count];
      count++;
    } else {
      clearInterval(textInterval);
    }
  }

  textInterval = setInterval(textAnim, 50);
}

const bars = document.querySelector('i.fa-bars');
const ul = document.querySelector('nav ul');

bars.addEventListener('click', ()=>{
  ul.classList.toggle('ul-visible');
});