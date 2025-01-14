let state = {}

function init() {
  // runTests()
  state.stylesheet = document.createElement("style")
  document.head.appendChild(state.stylesheet)
  prepElements()
  loadInitialValues()
  doUpdate()
}

function convert(input) {
  //let parts = input.split("?>")
  //let initial = parts.length === 1 ? parts[0] : parts[1]
  let converted = encodeURIComponent(input)
  let output = `:root {
  ${state.backgroundColorVar.value}: ${state.backgroundColorValue.value};
  ${state.borderColorVar.value}: ${state.borderColorValue.value};
  ${state.buttonColorVar.value}: ${state.buttonColorValue.value};
}

${state.buttonSelector.value} {
  margin: 0;
  width: ${state.buttonWidth.value};
  height: ${state.buttonHeight.value};
  border: 1px solid var(${state.borderColorVar.value});
  background: var(${state.backgroundColorVar.value});
}

${state.buttonSelector.value} ${state.childSelector.value} {
  margin: 0;
  width: 100%;
  height: 100%;
  background: var(${state.buttonColorVar.value});
  mask-image: url("data:image/svg+xml;utf8,${converted}");
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}
`
  return output
}

function doUpdate() {
  let results = convert(state.svgInput.value)
  state.exampleWrapper.innerHTML = state.buttonHTML.value
  state.cssOutput.value = results
  state.stylesheet.textContent = results
}

function loadInitialValues() {
  const svgInput = `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="0.5"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" fill="#000000" stroke="#000000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  state.svgInput.value = svgInput
  const buttonHTML = `<button class="play-button"><div><div></button>`
  state.buttonHTML.value = buttonHTML 
  state.buttonSelector.value = '.play-button'
  state.childSelector.value = 'div'
  state.buttonWidth.value = '2rem'
  state.buttonHeight.value = '2rem'
  state.borderColorValue.value = 'white'
  state.borderColorVar.value = '--button-border-color'
  state.buttonColorValue.value = 'goldenrod'
  state.buttonColorVar.value = '--button-color'
  state.backgroundColorValue.value = 'purple'
  state.backgroundColorVar.value = '--button-background-color'
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
    "exampleWrapper",
    "svgInput",
    "buttonHTML",
  ]
  els.forEach((el) => {
    state[el] = document.querySelector(`#${el}`)
    state[el].addEventListener("input", doUpdate)
  })
}

function runTests() {
  let failedTests = 0
  console.log("Running test cases")
  const testCases = [
    [
      `<svg></svg>`, 
      `background-image: url("data:image/svg+xml;utf8,<svg></svg>");\nbackground-size: contain;\nbackground-position: center;\nbackground-repeat: no-repeat;`
    ],
    [
      `<?xml version="1.0" encoding="UTF-8"?><svg></svg>`, 
      `background-image: url("data:image/svg+xml;utf8,<svg></svg>");\nbackground-size: contain;\nbackground-position: center;\nbackground-repeat: no-repeat;`
    ],
  ]

  testCases.forEach((testCase, testIndex) => {
    const output = convert(testCase[0])
    if (output !== testCase[1]) {
      failedTests += 1
      console.error(`TEST FAILED: Index ${testIndex}`)
      console.error(`Expected: ${testCase[1]}`)
      console.error(`Got: ${output}`)
    }
  })

  if (failedTests > 0) {
    const warningEl = document.querySelector("#warning")
    warningEl.innerHTML = "WARNING: Some Tests Cases Failed. This shouldn't happen unless you're working on the script. Check the console for details."
  }

}

export { init }

