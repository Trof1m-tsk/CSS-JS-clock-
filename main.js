const secondHand = document.querySelector(`.second-hand`);
const minuteHand = document.querySelector(`.min-hand`);
const hourHand = document.querySelector(`.hour-hand`);

function updateHands() {
  const now = new Date();

  const hours = now.getHours();
  const hourHandAngle = (hours / 12 * 360) + 90;
  hourHand.style.transform = `rotate(${hourHandAngle}deg`;

  const minutes = now.getMinutes();
  const minuteHandAngle = (minutes / 60 * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteHandAngle}deg`;

  const seconds = now.getSeconds(); 
  const secondHandAngle = (seconds / 60 * 360) + 90; 
  secondHand.style.transform = `rotate(${secondHandAngle}deg`;
  };

setInterval(updateHands, 1000);