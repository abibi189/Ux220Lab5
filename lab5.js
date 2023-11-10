class CenterHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}
customElements.define("x-center", CenterHtml);

class GreenHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:green">${this.innerHTML}</div>`;
    }
}
customElements.define("x-green", GreenHtml);