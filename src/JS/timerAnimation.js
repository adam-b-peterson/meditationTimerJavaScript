let totalTime = 6000;
let breathInTime = 4000;
let breathOutTime = 16000;

var breathIn = anime({
  targets: "div.animatedCircle",
  scale: [
    { value: 10, duration: breathInTime },
    { value: 1, duration: breathOutTime }
  ],
  elasticity: 0,
  easing: "linear",
  loop: true,
  opacity: 0.9
});

var elements = document.getElementsByClassName("animatedCircle");
// setTimeout(elements[0].parentNode.removeChild(elements[0]), 1000);

// var tem = elements[0];
// console.log(tem);

// var tem1 = elements[0].parentNode;
// console.log(tem1);

// var tem2 = elements[0].parentNode.removeChild(elements[0]);
// console.log(tem2);

function removeAnimation() {
  elements[0].parentNode.removeChild(elements[0]);
}

function timeoutAnimation(totalTime) {
  setTimeout(removeAnimation, totalTime);
}
timeoutAnimation(totalTime);

// setTimeout(removeAnimation(), 15000);

// elements[0].parentElement;

// document.querySelector('#animationControl').onclick = function(ele)
// {
//   console.log(ele);
// }
// breathIn.play;
// document.querySelector('#animationControl .pause').onclick = breathIn.pause;
// document.querySelector('#animationControl .restart').onclick = breathIn.restart;
