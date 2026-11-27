const allLinks = document.querySelectorAll("a");
if (allLinks) {
  allLinks.forEach((link) => {
    const hrefValue = link.getAttribute("href");
    // if (!(hrefValue === '#')) {
    //   link.setAttribute('href', '#');
    //   link.onclick = () => false;
    // }
  });
}

function demo() {
  const demoBlock = document.createElement("div");
  demoBlock.innerText = "";
  demoBlock.style.cssText = `
  pointer-events: none;
  user-select: none;
  position: fixed;
   z-index: 50;
  bottom: 0;
  right: 0;
  width: auto;
  height: auto;
  padding: 15px;
  color: red;
  font-size: 21px;
  font-weight: 700;
   transition: opacity 0.3s ease 0s;
}
  `;

  document.body.append(demoBlock);
  let opacityValue = 1;

  setInterval(() => {
    if (opacityValue) {
      opacityValue = 0;
      demoBlock.style.opacity = opacityValue;
    } else {
      opacityValue = 1;
      demoBlock.style.opacity = opacityValue;
    }
  }, 1400);
}
demo();
