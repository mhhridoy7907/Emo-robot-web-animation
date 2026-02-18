
const cube = document.getElementById("cube");
let isDrag=false, startX, startY;
let rotX=-25, rotY=30;
cube.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;
document.addEventListener("mousedown", e=>{isDrag=true; startX=e.clientX; startY=e.clientY;});
document.addEventListener("mouseup", ()=>isDrag=false);
document.addEventListener("mousemove", e=>{
  if(!isDrag) return;
  rotY += (e.clientX-startX)*0.4;
  rotX -= (e.clientY-startY)*0.4;
  cube.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  startX=e.clientX; startY=e.clientY;
});


const mouth = document.querySelector('.mouth');


function blinkMouth() {

  mouth.style.transform = 'translateX(-50%) scaleY(0.2)';


  setTimeout(() => {
    mouth.style.transform = 'translateX(-50%) scaleY(1)';
  }, 200);
}

setInterval(blinkMouth, 3000);
