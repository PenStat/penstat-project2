import{r as e,p as t}from"./6b3e3ed4.js";import{S as i}from"./c92e3b8e.js";const r=new URL(new URL("2a3c155e.svg",import.meta.url).href,import.meta.url).href,n=new URL(new URL("247d7fcf.svg",import.meta.url).href,import.meta.url).href,a=new URL(new URL("f1d14e54.svg",import.meta.url).href,import.meta.url).href;class c extends i{static get tag(){return"card-icon"}constructor(){super(),this.icon=n,this.type="objective",this.alt="Question Mark Icon"}static get properties(){return{...super.properties,icon:{type:String},type:{type:String},alt:{type:String}}}updated(e){super.updated(e),e.forEach(((e,t)=>{"type"===t&&"science"===this[t]&&(this.icon=r,this.alt="A lab beaker icon"),"type"===t&&"objective"===this[t]&&(this.icon=n,this.alt="A lightbulb icon"),"type"===t&&"question"===this[t]&&(this.icon=a,this.alt="Question Mark Icon")}))}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return[...super.styles,e`
        :host {
          display: block;
          //background-color: var(--simple-colors-default-theme-accent-7);
          color: var(--simple-colors-default-theme-accent-7);
        }
        ,
        img {
          display: inline-flex;
          height: var(--learning-card-height, 100px);
          width: var(--learning-card-width, 100px);
          background-color: green;
        }
      `]}render(){return t` <div class="outline"> <img src="${this.icon}" alt="" style="height:100px;width:100px"> </div> `}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!0,contentEditable:!0,gizmo:{title:"Learning Card",description:"An element that you have to replace / fix / improve",icon:"credit-card",color:"blue",groups:["Content","Presentation","Education"]},settings:{configure:[{property:"type",title:"Type",description:"Identifies the card",inputMethod:"select",options:{science:"Science",math:"Math"}}],advanced:[]},demoSchema:[{tag:c.tag,properties:{type:"science"},content:"<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>"}]}}}window.customElements.define(c.tag,c);export{c as CardIcon};
