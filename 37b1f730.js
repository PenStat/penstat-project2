import{n as t,r as e,y as a}from"./0440d75f.js";class r extends t{static get tag(){return"card-header"}static get styles(){return e`:host{display:block;background-color:transparent}`}static get properties(){return{type:{type:String}}}constructor(){super(),this.accentColor="red",this.dark=!1}static get styles(){return[...super.styles,e`:host{display:block}`]}render(){return a` <div class="slot-wrapper"> <div data-label="Header" data-layout-slotname="header"> <slot name="header"></slot> </div> <div data-label="SubHeader" data-layout-slotname="subheader"> <slot name="subheader"></slot> </div> </div> `}}customElements.define(r.tag,r);export{r as CardHeader};
