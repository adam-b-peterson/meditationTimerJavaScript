let totalTime = 6000;
let breathInTime = 4000;
let breathOutTime = 16000;

let totalLoop = Math.ceil(totalTime / (breathInTime + breathOutTime));
function breathIn() {
    anime({
    targets: 'div.animatedCircle',
    scale: [
        {value: 10, duration: breathInTime},
        {value: 1, duration: breathOutTime}
    ],
    elasticity: 0,
    easing:'linear',
    loop: totalLoop,
    opacity: .9
  });
}

breathIn();