const typed = document.querySelector(".typed");

function typeQuote(element, text, speed) {
  let index = 0;
  timer = setInterval(function () {
    if (index < text.length) {
      element.append(text.charAt(index));
      index++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

setTimeout(() => {
  typeQuote(typed, "Hello World.", 220);
}, 900);
