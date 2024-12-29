const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
let intervalid;

const generateColors = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }

  document.body.style.backgroundColor = color;
};

startBtn.addEventListener("click", () => {
  if (!intervalid) {
    intervalid = setInterval(generateColors,"1000");
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalid);
  intervalid = null;
});
