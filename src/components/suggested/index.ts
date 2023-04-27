import styles from './index.css';

export enum Atributos {
    "name" = "name",
    "image" = "image",  
}

class Suggested extends HTMLElement {
    name?: string;
    image?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<Atributos, null> = {

            image: null,
            name: null,
           

        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Atributos,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section class="section">
                <button class="aja">${this.name}</button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
    }
    
customElements.define("my-suggested", Suggested);
export default Suggested;