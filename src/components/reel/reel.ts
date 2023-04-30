import styles from './index.css';

export enum Attribute {
    "image" = "image",
}

class Reel extends HTMLElement{
    image?: string;

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            image: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
      }


    attributeChangedCallback(
        propName: Attribute,
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

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=`
                <section class="all">
                <button class="but"><img class ="img" src="${this.image}"></button>
                </section>
                `;
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-reel", Reel);
export default Reel;