// const promise1 = new Promise((resolve, reject) => {
//   const button = document.getElementById("clickme");

//   button.addEventListener("click", () => {
//     resolve("Promise is Resolved ");
//   });
// });

// function handleCallBack() {
//   const result = document.getElementById("state");
//   const result1 = document.getElementById("result");

//   promise1
//     .then(() => {
//       result.innerHTML = "<h2>Resolved</h2>";

//       result1.innerText = "Resulved";
//     })
//     .catch((err) => {
//       resultDiv.innerHTML += `<p>Error:${err}</p>`;
//     });
// }

// handleCallBack();

// async function f1() {
//   return "Hello";
// }

// const res = f1();

// ---------------------> Circle questions <---------------------------------------------------
let circles = [];
document.addEventListener("click", (e) => {
  if (circles.length >= 2) {
    circles.forEach((circle) => circle.element.remove());
    circles = [];
  }
  const x = e.clientX;
  const y = e.clientY;

  console.log("X:", x, "Y:", y);

  const radius = Math.random() * 50 + 10;
  const diameter = 2 * radius;

  const circleDiv = document.createElement("div");
  circleDiv.className = "circle";
  circleDiv.style.left = x - radius + "px";
  circleDiv.style.top = y - radius + "px";

  circleDiv.style.width = diameter + "px";
  circleDiv.style.height = diameter + "px";

  circles.push({ x, y, r: radius, element: circleDiv });
  document.body.appendChild(circleDiv);

  if (circles.length == 2) {
    console.log("check Overlapping Checking --> ");
    checkOverlap();
  }
});

function checkOverlap() {
  const c1 = circles[0];
  const c2 = circles[1];

  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < c1.r + c2.r) {
    console.log("Circles Overlap");
    return;
  } else {
    console.log("Circles Do Not Overlap");
    return;
  }
}
