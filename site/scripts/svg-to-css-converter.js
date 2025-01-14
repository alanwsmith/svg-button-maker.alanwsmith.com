let state = {}

function init() {
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
${state.pageCSS.value}
  ${state.backgroundColorVar.value}: ${state.backgroundColorValue.value};
  ${state.borderColorVar.value}: ${state.borderColorValue.value};
  ${state.buttonColorVar.value}: ${state.buttonColorValue.value};
}

${state.buttonSelector.value} {
  margin: 0;
  width: ${state.buttonWidth.value};
  height: ${state.buttonHeight.value};
  border: 1px solid var(${state.borderColorVar.value});
  border-radius: var(--button-border-radius);
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
  state.cssOutput.value = results
  state.stylesheet.textContent = results
}

function loadInitialValues() {
  state.pageCSS.value = `--accent-color-1: #6F1A07;
--accent-color-2: #2B2118;
--background-color: #112;
--button-border-radius: 0.7rem;
--headline-color: #D1BE9C;
--text-color: #F9EAE1;
--title-color: #D1BE9C;`
  state.svgInput.value = `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="0.5"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" fill="#000000" stroke="#000000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  state.buttonHTML.value = `<button class="play-button"><div><div></button>`
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
    console.log(exampleWrapper)
    console.log(state.buttonHTML.value)
    exampleWrapper.innerHTML = state.buttonHTML.value
  })
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
  ]
  els.forEach((el) => {
    state[el] = document.querySelector(`#${el}`)
    state[el].addEventListener("input", doUpdate)
  })
}

export { init }

