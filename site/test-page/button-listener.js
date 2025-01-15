let clicksForElephantButton = 0
let nodesForclicksForElephantButton = document.querySelectorAll(".elephant-button")
let elsForclicksForElephantButton = [...nodesForclicksForElephantButton]
elsForclicksForElephantButton.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    clicksForElephantButton += 1
    console.log("clicksForElephantButton is now: " + clicksForElephantButton)
    const clickCountNodes = document.querySelectorAll(".click-count")
    const clickCountEls = [...clickCountNodes]
    clickCountEls.forEach((clickCountEl) => {
      clickCountEl.innerHTML = "clicksForElephantButton: " + clicksForElephantButton
    })
  })
})


let clicksForPauseButton = 0
let nodesForclicksForPauseButton = document.querySelectorAll(".pause-button")
let elsForclicksForPauseButton = [...nodesForclicksForPauseButton]
elsForclicksForPauseButton.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    clicksForPauseButton += 1
    console.log("clicksForPauseButton is now: " + clicksForPauseButton)
    const clickCountNodes = document.querySelectorAll(".click-count")
    const clickCountEls = [...clickCountNodes]
    clickCountEls.forEach((clickCountEl) => {
      clickCountEl.innerHTML = "clicksForPauseButton: " + clicksForPauseButton
    })
  })
})
