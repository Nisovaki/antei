$(document).ready(function () {
  const anchors = document.querySelectorAll('a[href^="#"]')

  for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};

const button1 = document.getElementById('button-1')
button.addEventListener('click', () => {
  window.location.href = "#feedback-anchor"
});
const button2 = document.getElementById('button-2')
button.addEventListener('click', () => {
  window.location.href = "#feedback-anchor"
});
const button3 = document.getElementById('button-3')
button.addEventListener('click', () => {
  window.location.href = "#feedback-anchor"
});
});
