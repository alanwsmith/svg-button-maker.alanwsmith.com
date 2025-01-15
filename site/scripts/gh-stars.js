class GitHubStars extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.repo = this.getAttribute('repo')
    if (this.repo !== null) {
      this.getColors()
      this.siteURL = `https://github.com/${this.repo}`
      this.apiURL = `https://api.github.com/repos/${this.repo}`
      const content = this.template().content.cloneNode(true)
      const buttonNodes = content.querySelectorAll('button')
      const buttonEls = [...buttonNodes]
      buttonEls.forEach((button) => {
        button.addEventListener('click', (event) => {
          window.open(this.siteURL, '_blank')
          console.log(this.repo)
        })
      })
      this.shadowRoot.appendChild(content)
      this.getCount()
    }
  }

  getColors() {
    this.foregroundColor = this.dataset.foreground ? this.dataset.foreground : "black"
    this.backgroundColor = this.dataset.background ? this.dataset.background : "white"
  }

  async getCount() {
    const countButton = this.shadowRoot.querySelector(".count-button")
    let response = await fetch(this.apiURL)
    if (!response.ok) {
      countButton.innerHTML = "+1"
      throw new Error('There was a problem getting the data')
    } else {
      this.gitHubJson = await response.json()
      // TODO: Figure out how to do error handling here
      countButton.innerHTML = this.gitHubJson.stargazers_count
    }
  }

  template() {
    const template = this.ownerDocument.createElement('template')
    template.innerHTML = `
<style>
.logo-button {
  background: ${this.backgroundColor};
  border: 0;
  border-top: 1px solid ${this.foregroundColor};
  border-bottom: 1px solid ${this.foregroundColor};
  border-left: 1px solid ${this.foregroundColor};
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  cursor: pointer;
  height: 1.3rem;
  margin: 0;
  padding: 0;
  width: 2.3rem;
  position: relative;
}

.logo-button:after {
  background: ${this.foregroundColor};
  content: "";
  height: 100%;
  left: 0;
  margin: 0;
  mask-image: url("data:image/svg+xml;utf8,%3Csvg%20width%3D%22139%22%20height%3D%22106%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M54.854%204C27.839%204%206%2026%206%2053.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C103.707%2026%2081.788%204%2054.854%204Z%22%20fill%3D%22%2324292f%22%2F%3E%3Cpath%20d%3D%22m111.031%2016.445%204.33-8.72c.555-1.12%202.161-1.12%202.717%200l4.329%208.72%209.681%201.407c1.242.18%201.737%201.699.838%202.57l-7.004%206.783%201.653%209.582c.212%201.231-1.087%202.17-2.198%201.588l-8.658-4.527-8.657%204.527c-1.112.581-2.411-.357-2.199-1.588l1.653-9.582-7.004-6.783c-.9-.871-.404-2.39.838-2.57z%22%20stroke%3D%22%23000%22%20stroke-width%3D%223.333%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  position: absolute;
  top: 0;
  width: 100%;
}

.count-button {
  background: ${this.backgroundColor};
  color: ${this.foregroundColor};
  border: 0;
  border-top: 1px solid ${this.foregroundColor};
  border-bottom: 1px solid ${this.foregroundColor};
  border-right: 1px solid ${this.foregroundColor};
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  cursor: pointer;
  height: 1.3rem;
  margin: 0;
  padding-right: 0.3;
  min-width: 2.3rem;
  position: relative;
}

div {
  display: flex;
  min-width: 5rem;
}

</style>
<div><button class="logo-button"></button><button class="count-button">|</button></div>
`
    return template
  }
}

customElements.define('gh-stars', GitHubStars)
