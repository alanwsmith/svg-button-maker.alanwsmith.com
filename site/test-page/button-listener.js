let clickCount = 0
let buttonNodes = document.querySelectorAll(".elephant-button")
let buttonEls = [...buttonNodes]
buttonEls.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    clickCount += 1
    console.log("Button click count is now: " + clickCount)
    const clickCountNodes = document.querySelectorAll(".clickCount")
    const clickCountEls = [...clickCountNodes]
    clickCountEls.forEach((clickCountEl) => {
      clickCountEl.innerHTML = "Clicks: " + clickCount
    })
  })
})
