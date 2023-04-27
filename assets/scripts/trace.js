const rocket = document.querySelector(".rocket");

function moveRocket() {
    const containerRect = document.body.getBoundingClientRect();
    const rocketRect = rocket.getBoundingClientRect();

    const startX = rocket.offsetLeft;
    const startY = rocket.offsetTop;

    const targetX = Math.random() * (containerRect.width - rocketRect.width);
    const targetY = Math.random() * (containerRect.height - rocketRect.height);

    const controlX = (startX + targetX) / 2;
    const controlY = (startY + targetY) / 2;

    const animation = rocket.animate(
        [
            { transform: `translate(${startX}px, ${startY}px)` },
            { transform: `translate(${controlX}px, ${controlY}px)` },
            { transform: `translate(${targetX}px, ${targetY}px)` },
        ],
        {
            duration: 5000, // Increase or decrease the duration for each movement in milliseconds
            easing: "linear",
            fill: "forwards",
        }
    );

    animation.onfinish = moveRocket;
}

// trace.js
if (rocket) {
    moveRocket();
  }
  
