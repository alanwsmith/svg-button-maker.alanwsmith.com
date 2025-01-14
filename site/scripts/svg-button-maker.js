let state = {}

const samples = {
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
      console.log(event.target)
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
}

function loadInitialValues() {
  state.pageCSS.value = `--accent-color-1: #A8763E;
--accent-color-2: #F9EAE1;
--background-color: #F7F3E3;
--button-border-radius: 0.7rem;
--headline-color: #112;
--text-color: #112;
--title-color: #112;`
  state.svgInput.value = `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="0.5"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" fill="#000000" stroke="#000000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  state.buttonHTML.value = `<button class="play-button"></button>`
  state.buttonSelector.value = '.play-button'
  state.childSelector.value = 'div'
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
    exampleWrapper.innerHTML = state.buttonHTML.value
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
    "childSelector",
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

