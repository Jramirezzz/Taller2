class Login extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);

            const form = this.ownerDocument.createElement('section')

            const Email = this.ownerDocument.createElement('my-login')
            Email.placeholder = "Email"
            Email.type = "Email"
            Email.addEventListener("change", (cha:any) => (information.email = cha.target.value));
            this.shadowRoot?.appendChild(Email)

            const Password = this.ownerDocument.createElement('my-login')
            Password.placeholder = "Password"
            Password.type = "Password"
            Password.addEventListener("change", (cha:any) => (information.password = cha.target.value));
            this.shadowRoot?.appendChild(Password)
                
            const button = this.ownerDocument.createElement('my-boton');
            form.appendChild(button)
            this.shadowRoot?.appendChild(form)


        }
    }
}

customElements.define('My-login', Login)
