import "./style.css";

const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLDivElement;
const cursorOutline = document.querySelector(
  "[data-cursor-outline]"
) as HTMLDivElement;

window.addEventListener("mousemove", (e: MouseEvent) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  const fill: FillMode = 'forwards';
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill});
});
