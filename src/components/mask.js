import m from "mithril";

// Helper function to update CSS variables for the hole
const updateHolePosition = (element, holeSize, holeX, holeY) => {
  element.style.setProperty("--hole-size", `${holeSize}px`);
  // element.style.setProperty("--hole-x", `${holeX}%`);
  // element.style.setProperty("--hole-y", `${holeY}%`);
};

// Function to animate the hole size and movement
const animateHole = (element) => {
  let holeSize = 1;
  let angle = 0;
  let radius = 1;

  const loop = () => {
    // Increment hole size and angle for movement
    holeSize += 10;
    angle += 0.05;
    radius += 0.1;

    // Calculate new x and y positions using polar coordinates
    const holeX = 50 + Math.cos(angle) * radius;
    const holeY = 50 + Math.sin(angle) * radius;

    // Update the CSS properties
    updateHolePosition(element, holeSize, holeX, holeY);

    // console.log(holeSize, angle, radius);
    // Continue the animation at 60 FPS
    angle < 5 ? requestAnimationFrame(loop) : element.remove();
  };
  // Start the animation loop
  requestAnimationFrame(loop);
};

// Mithril component for the mask with animation
export const Mask = {
  oncreate: (vnode) => {
    // Start the hole animation
    animateHole(vnode.dom);
  },
  view: () => m("div.mask"), // Render the div with the mask class
};
