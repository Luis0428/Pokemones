import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  render(){
    return html`
      <div>
        <p> ${pokemons} </p>
      </div>
    `;
  }
  static get properties(){
    return {
      //greeting: {type: String},
      //data: {attribute: false},
      //items: {type: Array},
      pokemons: {type: String},
    };
  }

  constructor(){
      super();
      this.pokemons = " ";
      //this.greeting = 'Hello';
      //this.data = {name: 'Cora'};
      //this.items = [1, 2, 3];
  }

  getPokemon(){ 
    
    const Http = new XMLHttpRequest();
    const url = "https://pokeapi.co/api/v2/pokemon";
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = function (){
      this.pokemons = Http.responseText;
    }
  }
}

customElements.define('my-element', MyElement);