import "./components/export"
import "./screens/dashboard"
import "./screens/published"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-published');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)