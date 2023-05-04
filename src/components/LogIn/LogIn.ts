
export default class login extends HTMLElement{
    
    placeholder?:string

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

   

    connectedCallback() {
        this.render();
      }


        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=``;

                const input = this.ownerDocument.createElement("input")
                this.shadowRoot?.appendChild(input)
            }
        }
}
customElements.define("my-login", login);
