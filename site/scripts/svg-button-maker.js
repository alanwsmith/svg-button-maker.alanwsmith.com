let state = {}

const samples = {
  "download-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 20L18 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "fast-forward-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M13 6L19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 6L11 12L5 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "pause-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="2"><path d="M6 18.4V5.6C6 5.26863 6.26863 5 6.6 5H9.4C9.73137 5 10 5.26863 10 5.6V18.4C10 18.7314 9.73137 19 9.4 19H6.6C6.26863 19 6 18.7314 6 18.4Z" fill="#000000" stroke="#000000" stroke-width="2"></path><path d="M14 18.4V5.6C14 5.26863 14.2686 5 14.6 5H17.4C17.7314 5 18 5.26863 18 5.6V18.4C18 18.7314 17.7314 19 17.4 19H14.6C14.2686 19 14 18.7314 14 18.4Z" fill="#000000" stroke="#000000" stroke-width="2"></path></svg>`
  },
  "play-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="2"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "rewind-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M11 6L5 12L11 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6L13 12L19 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  }
}

function init() {
  state.stylesheet = document.createElement("style")
  document.head.appendChild(state.stylesheet)
  state.script = document.createElement("script")
  document.head.appendChild(state.script)
  prepElements()
  loadInitialValues()
  addCopyButtonTo("#cssOutput", "#cssCopyButtonWrapper")
  addCopyButtonTo("#buttonHTML", "#htmlCopyButtonWrapper")
  addCopyButtonTo("#eventListener", "#listenerCopyButtonWrapper")
  addSampleButtonListeners()
  doUpdate()
}

function addCopyButtonTo(codeSelector, buttonParentSelector) {
  const codeEl = document.querySelector(codeSelector)
  const buttonParentEl = document.querySelector(buttonParentSelector)
  const copyButton = document.createElement("button")
  copyButton.innerHTML = "Copy"
  copyButton.dataset.target = codeSelector
  copyButton.addEventListener("click", async (event) => {
    const elToCopy = document.querySelector(event.target.dataset.target)
    console.log(elToCopy)
      try {
        let content
        if (elToCopy.value) {
          content = elToCopy.value
        } else {
          content = elToCopy.innerText
        }
        await navigator.clipboard.writeText(content)
        event.target.innerHTML = "Copied"
      } catch (err) {
        event.target.innerHTML = "Error copying"
      }
      setTimeout((theButton) => {
        event.target.innerHTML = "Copy"
      }, 2000, event.target)
  })
  buttonParentEl.appendChild(copyButton)
}

function addSampleButtonListeners() {
  const sampleButtonNodes = document.querySelectorAll(".sample-button")
  const sampleButtonEls = [...sampleButtonNodes]
  sampleButtonEls.forEach((sampleButtonEl) => {
    sampleButtonEl.addEventListener("click", (event) => {
      state.buttonHTML.value = `<button class="${event.target.dataset.kind}"></button>`
      state.svgInput.value = samples[event.target.dataset.kind].svg
      state.buttonSelector.value = `.${event.target.dataset.kind}`
      doUpdate()
    })
  })
}

function convert(input) {
  // split page vars so they can be shifted over
  // two spaces to match the formatting of the rest
  // of the css
  let pageVars = state.pageCSS.value.split("\n")
  let pageVarsString = pageVars.map((pv) => {
    return `  ${pv}`
  }).join("\n")
  let converted = encodeURIComponent(input)
  let output = `:root {
${pageVarsString}
  ${state.backgroundColorVar.value}: ${state.backgroundColorValue.value};
  ${state.borderColorVar.value}: ${state.borderColorValue.value};
  ${state.buttonColorVar.value}: ${state.buttonColorValue.value};
}

${state.buttonSelector.value} {
  background: var(${state.backgroundColorVar.value});
  border: 1px solid var(${state.borderColorVar.value});
  border-radius: var(--button-border-radius);
  cursor: pointer;
  height: ${state.buttonHeight.value};
  margin: 0;
  padding: 0;
  width: ${state.buttonWidth.value};
  position: relative;
}

${state.buttonSelector.value}:after {
  background: var(${state.buttonColorVar.value});
  content: "";
  height: 100%;
  left: 0;
  margin: 0;
  mask-image: url("data:image/svg+xml;utf8,${converted}");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  position: absolute;
  top: 0;
  width: 100%;
}
`
  return output
}

function doUpdate() {
  let results = convert(state.svgInput.value)
  state.cssOutput.value = results
  state.stylesheet.textContent = results
  state.script.innerHTML = state.eventListener.value
  const exampleButtonNodes = document.querySelectorAll(".example-button")
  const exampleButtonEls = [...exampleButtonNodes]
  const className = state.buttonSelector.value.replace(/^\./, "")
  exampleButtonEls.forEach((exampleButtonEl) => {
    exampleButtonEl.removeAttribute("class")
    exampleButtonEl.classList.add("example-button")
    exampleButtonEl.classList.add(className)
  })

}

function loadInitialValues() {
  state.pageCSS.value = `--accent-color-1: #A8763E;
--accent-color-2: #F9EAE1;
--background-color: #F7F3E3;
--button-border-radius: 0.7rem;
--headline-color: #112;
--text-color: #112;
--title-color: #112;`
  state.svgInput.value = samples['play-button'].svg
  state.buttonHTML.value = `<button class="play-button"></button>`
  state.buttonSelector.value = '.play-button'
  //state.childSelector.value = 'div'
  state.buttonWidth.value = '3.5rem'
  state.buttonHeight.value = '2rem'
  state.buttonColorValue.value = 'var(--accent-color-1)'
  state.buttonColorVar.value = '--button-color'
  state.borderColorValue.value = 'var(--accent-color-1)'
  state.borderColorVar.value = '--button-border-color'
  state.backgroundColorValue.value = 'var(--accent-color-2)'
  state.backgroundColorVar.value = '--button-background-color'
  const exampleWrapperNodes = document.querySelectorAll(".exampleWrapper")
  state.exampleWrappers = [...exampleWrapperNodes]
  state.exampleWrappers.forEach((exampleWrapper) => {
    const exampleButton = document.createElement("button")
    exampleButton.classList.add("example-button")
    exampleButton.classList.add("play-button")
    exampleWrapper.appendChild(exampleButton)
  })
  state.eventListener.value = `let clickCount = 0
const buttonNodes = document.querySelectorAll("${state.buttonSelector.value}")
const buttonEls = [...buttonNodes]
buttonEls.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    clickCount += 1
    const clickCountNodes = document.querySelectorAll(".clickCount")
    const clickCountEls = [...clickCountNodes]
    clickCountEls.forEach((clickCountEl) => {
      clickCountEl.innerHTML = "Clicks: " + clickCount
    })
  })
})`
}

function prepElements() {
  const els = [
    "backgroundColorValue",
    "backgroundColorVar",
    "buttonColorValue",
    "buttonColorVar",
    "borderColorValue",
    "borderColorVar",
    "buttonHeight",
    "buttonSelector",
    "buttonWidth",
    //"childSelector",
    "cssOutput",
    "svgInput",
    "buttonHTML",
    "pageCSS",
    "eventListener",
  ]
  els.forEach((el) => {
    state[el] = document.querySelector(`#${el}`)
    state[el].addEventListener("input", doUpdate)
  })
}

export { init }

