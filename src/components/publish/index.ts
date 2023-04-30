import styles from './index.css';

class Publish extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    connectedCallback() {
        this.render();
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section class="all">
                <button class="but"><img class="logo" src="https://cdn-icons-png.flaticon.com/512/2740/2740600.png"> <p>Upload your pictures</p></button>
                </section>
                `;
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
}

customElements.define("my-publish", Publish);
export default Publish;