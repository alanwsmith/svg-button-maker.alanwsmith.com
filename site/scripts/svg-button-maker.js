let state = {}

const samples = {
  "download-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 20L18 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "elephant-button": {
    "svg": `<svg height="800" width="800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><path d="M510.909 157.835c-6.323-38.097-41.228-48.606-54.55-57.191-13.329-8.584.02-26.665-9.502-26.672-9.53-.014-16.184-7.64-18.08-13.35-1.904-5.723-8.571-3.82-12.391 7.606-3.82 11.425-4.689 43.324 29.464 60.024 39.028 19.087 34.553 60.032 7.888 61.28-33.525 1.572-39.352-21.652-51.716-44.524-12.357-22.866-39-35.277-59.963-33.388-7.675.689-19.962 2.655-32.45 4.875-18.342 3.386-43.745 8.385-43.745 8.385-7.612-8.578-20.934-21.921-47.606-16.239-14.694 3.137-37.222 12.963-48.902 36.78-2.772 7.592-4.468 16.576-4.468 27.313 0 14.218 2.979 31.478 10.399 52.309 7.309 20.486 18.555 34.697 31.422 43.889 12.874 9.185 27.464 13.364 41.586 13.364 12.157 0 23.941-3.118 33.836-8.785 9.902-5.668 17.894-13.826 22.706-23.961 3.214-6.764 5.034-14.426 5.048-22.983 0-1.034-.034-2.096-.082-3.158l10.542-.531c.062 1.234.09 2.468.09 3.689.014 10.068-2.172 19.348-6.054 27.519-3.889 8.172-9.46 15.226-16.163 20.97-13.418 11.488-31.318 17.797-49.923 17.804-16.204 0-32.988-4.82-47.716-15.328-14.735-10.502-27.319-26.672-35.235-48.944-7.737-21.714-11.02-40.159-11.02-55.852 0-7.123.69-13.66 1.938-19.68C85.171 164.889 50.914 219.694 44.116 274.41c-10.901 14.763-29.506 35.925-40.304 44.572-12.915 10.315 8.55 17.404 40.876 1.234-.097-.855-.172-1.73.096-.034A16659.558 16659.558 0 0 0 66.56 454.504h84.497s8.578-39.138 12.674-52.812c12.681-42.248 52.819-33.27 56.281 4.2 1.034 11.143 4.985 48.612 4.985 48.612h80.27l32.781-124.8s9.998-31.519 29.568-44.73c13.39-9.047 41.897-1.862 46.668-4.717 4.758-2.854-7.799-15.97-14.266-21.914-8.564-7.916-18.363-23.83.345-20.617 13.515 2.324 33.974 3.758 46.13 2.192 57.204-6.219 69.664-50.343 64.416-82.083z" style="fill:#000"/></svg>`
  },
  "fast-forward-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M13 6L19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 6L11 12L5 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "help-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 18.01L12.01 17.9989" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "mute-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><g clip-path="url(#clip0_4223_8258)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4696 9.46973C17.7625 9.1768 18.2373 9.17675 18.5303 9.46961L20.0003 10.9393L21.4696 9.46973C21.7625 9.1768 22.2373 9.17675 22.5303 9.46961C22.8232 9.76247 22.8232 10.2373 22.5304 10.5303L21.061 12L22.5304 13.4697C22.8232 13.7627 22.8232 14.2375 22.5303 14.5304C22.2373 14.8233 21.7625 14.8232 21.4696 14.5303L20.0003 13.0607L18.5303 14.5304C18.2373 14.8233 17.7625 14.8232 17.4696 14.5303C17.1767 14.2373 17.1768 13.7625 17.4697 13.4696L18.9397 12L17.4697 10.5304C17.1768 10.2375 17.1767 9.76266 17.4696 9.46973Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0367 3.3964C14.2002 2.62923 15.75 3.46373 15.75 4.85741V19.1431C15.75 20.5368 14.2002 21.3713 13.0367 20.6041L7.03762 16.6487C6.99677 16.6218 6.94892 16.6074 6.9 16.6074H4C2.48122 16.6074 1.25 15.3762 1.25 13.8574V10.1431C1.25 8.62434 2.48122 7.39313 4 7.39313H6.9C6.94892 7.39313 6.99677 7.37877 7.03762 7.35184L13.0367 3.3964Z" fill="#000000"></path></g><defs><clipPath id="clip0_4223_8258"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>`
  },
  "new-window-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 20.5L12 12M12 12V16M12 12H8" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "pause-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="2"><path d="M6 18.4V5.6C6 5.26863 6.26863 5 6.6 5H9.4C9.73137 5 10 5.26863 10 5.6V18.4C10 18.7314 9.73137 19 9.4 19H6.6C6.26863 19 6 18.7314 6 18.4Z" fill="#000000" stroke="#000000" stroke-width="2"></path><path d="M14 18.4V5.6C14 5.26863 14.2686 5 14.6 5H17.4C17.7314 5 18 5.26863 18 5.6V18.4C18 18.7314 17.7314 19 17.4 19H14.6C14.2686 19 14 18.7314 14 18.4Z" fill="#000000" stroke="#000000" stroke-width="2"></path></svg>`
  },
  "play-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="2"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "rewind-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M11 6L5 12L11 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6L13 12L19 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
  "sound-high-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9697 6.96967C17.2626 6.67678 17.7374 6.67678 18.0303 6.96967L17.5 7.5C18.0303 6.96967 18.0306 6.96989 18.0308 6.97012L18.0313 6.9706L18.0323 6.97168L18.0349 6.97426L18.0416 6.98113L18.0613 7.00165C18.0771 7.01833 18.0982 7.04101 18.1237 7.06959C18.1747 7.1267 18.2439 7.20756 18.325 7.31121C18.487 7.51816 18.6983 7.8181 18.9084 8.20336C19.3286 8.97364 19.75 10.0966 19.75 11.5C19.75 12.9034 19.3286 14.0264 18.9084 14.7966C18.6983 15.1819 18.487 15.4818 18.325 15.6888C18.2439 15.7924 18.1747 15.8733 18.1237 15.9304C18.0982 15.959 18.0771 15.9817 18.0613 15.9984L18.0416 16.0189L18.0349 16.0257L18.0323 16.0283L18.0313 16.0294L18.0308 16.0299C18.0306 16.0301 18.0303 16.0303 17.5207 15.5207L18.0303 16.0303C17.7374 16.3232 17.2626 16.3232 16.9697 16.0303C16.6776 15.7383 16.6768 15.2654 16.9671 14.9723C16.9679 14.9714 16.9688 14.9705 16.9697 14.9697L17.5 15.5C16.9697 14.9697 16.9695 14.9699 16.9693 14.9701L16.9689 14.9705L16.9682 14.9711L16.9673 14.9721L16.9724 14.9667C16.9786 14.9602 16.9897 14.9482 17.0052 14.9309C17.0362 14.8962 17.0842 14.8404 17.1437 14.7643C17.263 14.6119 17.4267 14.3806 17.5916 14.0784C17.9214 13.4736 18.25 12.5966 18.25 11.5C18.25 10.4034 17.9214 9.52636 17.5916 8.92164C17.4267 8.6194 17.263 8.38809 17.1437 8.23567C17.0842 8.15963 17.0362 8.10377 17.0052 8.06908C16.9897 8.05176 16.9786 8.03978 16.9724 8.03326L16.9671 8.02774C16.6768 7.73464 16.6776 7.2617 16.9697 6.96967Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9697 3.96967C20.2626 3.67678 20.7374 3.67678 21.0303 3.96967L20.5 4.5C21.0303 3.96967 21.0306 3.96991 21.0308 3.97017L21.0314 3.97072L21.0327 3.972L21.0359 3.97527L21.045 3.98462C21.0523 3.9921 21.0619 4.00207 21.0736 4.01451C21.0971 4.03939 21.1292 4.0742 21.1688 4.11882C21.2478 4.20802 21.3566 4.33662 21.4851 4.50365C21.7419 4.83749 22.0786 5.32653 22.4137 5.96319C23.0845 7.23773 23.75 9.10689 23.75 11.5C23.75 13.8931 23.0845 15.7623 22.4137 17.0368C22.0786 17.6735 21.7419 18.1625 21.4851 18.4963C21.3566 18.6634 21.2478 18.792 21.1688 18.8812C21.1292 18.9258 21.0971 18.9606 21.0736 18.9855C21.0619 18.9979 21.0523 19.0079 21.045 19.0154L21.0359 19.0247L21.0327 19.028L21.0314 19.0293L21.0308 19.0298C21.0306 19.0301 21.0303 19.0303 20.5 18.5L21.0303 19.0303C20.7374 19.3232 20.2626 19.3232 19.9697 19.0303C19.6771 18.7378 19.6768 18.2636 19.9687 17.9706C19.9688 17.9706 19.9689 17.9705 19.969 17.9704L19.9689 17.9705L19.9687 17.9706L19.9683 17.9711L19.9678 17.9716C19.9679 17.9714 19.9684 17.9709 19.9693 17.97L19.9825 17.9562C19.9957 17.9422 20.0173 17.9189 20.0461 17.8864C20.1038 17.8213 20.1903 17.7194 20.2962 17.5818C20.5081 17.3062 20.7964 16.889 21.0863 16.3382C21.6655 15.2377 22.25 13.6069 22.25 11.5C22.25 9.39311 21.6655 7.76227 21.0863 6.66181C20.7964 6.11097 20.5081 5.69376 20.2962 5.41822C20.1903 5.28057 20.1038 5.17869 20.0461 5.1136C20.0173 5.08107 19.9957 5.05777 19.9825 5.04384L19.9693 5.03C19.9683 5.02899 19.9678 5.02845 19.9677 5.02839L19.9683 5.02891L19.9689 5.02951L19.9692 5.02989C19.6768 4.73696 19.6769 4.26242 19.9697 3.96967ZM19.9677 5.02838C19.9677 5.02838 19.9677 5.02838 19.9677 5.02839L19.9677 5.02838Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0367 3.3964C13.2002 2.62923 14.75 3.46373 14.75 4.85741V19.1431C14.75 20.5368 13.2002 21.3713 12.0367 20.6041L6.03762 16.6487C5.99677 16.6218 5.94892 16.6074 5.9 16.6074H3C1.48122 16.6074 0.25 15.3762 0.25 13.8574V10.1431C0.25 8.62434 1.48122 7.39313 3 7.39313H5.9C5.94892 7.39313 5.99677 7.37877 6.03762 7.35184L12.0367 3.3964Z" fill="#000000"></path></svg>`
  },
  "wolf-button": {
    "svg": `<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M5.81249 7C5.81249 7 5.35861 7.62759 4.81552 8.66667M18.1875 7C18.1875 7 18.6414 7.62759 19.1845 8.66667M4.81552 8.66667C4.0067 10.2142 3 12.6743 3 15.3333C5.8125 15.3333 7.49999 17 7.49999 17C7.49999 17 8.62499 22 12 22C15.375 22 16.5 17 16.5 17C16.5 17 18.1875 15.3333 21 15.3333C21 12.6743 19.9933 10.2142 19.1845 8.66667M4.81552 8.66667C4.81552 8.66667 1.875 6.44436 4.81552 2C5.81249 2.55556 8.625 4.77778 8.625 4.77778C8.625 4.77778 10.3125 3.66667 12 3.66667C13.6875 3.66667 15.375 4.77778 15.375 4.77778C15.375 4.77778 18.1875 2.55556 19.3125 2C22.125 6.44456 19.1845 8.66667 19.1845 8.66667" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 18L12 18M13 18L12 18M12 18L12 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 12.5L10 14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 12.5L14 14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  },
}

function init() {
  state.stylesheet = document.createElement("style")
  document.head.appendChild(state.stylesheet)
  state.script = document.createElement("script")
  document.head.appendChild(state.script)
  prepElements()
  loadInitialValues()
  addCopyButtonTo("#rootVariables", "#rootCopyButtonWrapper")
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
      state.buttonSelector.value = `${event.target.dataset.kind}`
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
  let rootVariables = `:root {
${pageVarsString}
}
`

  let buttonCSS = `.${state.buttonSelector.value} {
  background: var(${state.backgroundColorVar.value});
  border: 1px solid var(${state.borderColorVar.value});
  border-radius: var(--button-border-radius);
  height: var(--button-height);
  margin: 0;
  width: var(--button-width);
  position: relative;
}

.${state.buttonSelector.value}:hover {
  background: var(${state.backgroundHoverColorVar.value});
  border: 1px solid var(${state.borderHoverColorVar.value});
}

.${state.buttonSelector.value}:after {
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

.${state.buttonSelector.value}:hover:after {
  background: var(${state.buttonHoverColorVar.value});
}

`
  return [rootVariables, buttonCSS]
}

function doUpdate() {
  let results = convert(state.svgInput.value)
  state.rootVariables.value = results[0]
  state.cssOutput.value = results[1]
  state.stylesheet.textContent = `${results[0]}\n${results[1]}`
  state.eventListener.value = getEventListenerCode()
  state.script.innerHTML = getEventListenerCode()
  const exampleButtonNodes = document.querySelectorAll(".example-button")
  const exampleButtonEls = [...exampleButtonNodes]
  const primaryClass = state.buttonSelector.value
  let secondaryClasses = state.secondaryClasses.value
  if (secondaryClasses !== "") {
    secondaryClasses = ` ${secondaryClasses}`
  }
  exampleButtonEls.forEach((exampleButtonEl) => {
    exampleButtonEl.removeAttribute("class")
    exampleButtonEl.classList.add("example-button")
    exampleButtonEl.classList.add(primaryClass)
  })
  state.buttonHTML.value = `<button class="${primaryClass}${secondaryClasses}"></button>`
}

function getEventListenerCode() {
  return `let clickCount = 0
let buttonNodes = document.querySelectorAll(".${state.buttonSelector.value}")
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
})`
}

function loadInitialValues() {
  state.pageCSS.value = `--accent-color-1: #A8763E;
--accent-color-2: #F9EAE1;
--background-color: #F7F3E3;
--button-base-background-color: var(--accent-color-2);
--button-base-border-color: var(--accent-color-1);
--button-base-color: var(--accent-color-1);
--button-border-radius: 0.7rem;
--button-height: 2rem;
--button-hover-background-color: var(--accent-color-1);
--button-hover-border-color: var(--accent-color-2);
--button-hover-color: var(--accent-color-2);
--button-width: 3.5rem;
--headline-color: #112;
--text-color: #112;
--title-color: #112;`
  state.svgInput.value = samples['play-button'].svg
  state.buttonHTML.value = `<button class="play-button"></button>`
  state.buttonSelector.value = 'play-button'
  state.buttonColorVar.value = '--button-base-color'
  state.buttonHoverColorVar.value = '--button-hover-color'
  state.borderColorVar.value = '--button-base-border-color'
  state.borderHoverColorVar.value = '--button-hover-border-color'
  state.backgroundColorVar.value = '--button-base-background-color'
  state.backgroundHoverColorVar.value = '--button-hover-background-color'
  const exampleWrapperNodes = document.querySelectorAll(".exampleWrapper")
  state.exampleWrappers = [...exampleWrapperNodes]
  state.exampleWrappers.forEach((exampleWrapper) => {
    const exampleButton = document.createElement("button")
    exampleButton.classList.add("example-button")
    exampleButton.classList.add("play-button")
    exampleWrapper.appendChild(exampleButton)
  })
}

function prepElements() {
  const els = [
    "backgroundColorVar",
    "backgroundHoverColorVar",
    "buttonColorVar",
    "buttonHoverColorVar",
    "borderColorVar",
    "borderHoverColorVar",
    "buttonSelector",
    "cssOutput",
    "svgInput",
    "buttonHTML",
    "pageCSS",
    "eventListener",
    "rootVariables",
    "secondaryClasses", 
  ]
  els.forEach((el) => {
    state[el] = document.querySelector(`#${el}`)
    state[el].addEventListener("input", doUpdate)
  })
}

export { init }

