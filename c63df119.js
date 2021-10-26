import{r as e,y as t}from"./240cb2c1.js";import{S as r}from"./1732633b.js";const i=new URL(new URL("f5b82f72.svg",import.meta.url).href,import.meta.url).href,n=new URL(new URL("c68b41a8.svg",import.meta.url).href,import.meta.url).href,c=new URL(new URL("f1d14e54.svg",import.meta.url).href,import.meta.url).href;class o extends r{static get tag(){return"card-icon"}constructor(){super(),this.icon=n,this.type="objective"}static get properties(){return{...super.properties,icon:{type:String},type:{type:String}}}updated(e){super.updated(e),e.forEach(((e,t)=>{"type"===t&&"science"===this[t]&&(this.icon=i,this.accentColor="green"),"type"===t&&"objective"===this[t]&&(this.icon=n),"type"===t&&"question"===this[t]&&(this.icon=c)}))}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return[...super.styles,e`
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
      `]}render(){return t` <div class="outline"> <img src="${this.icon}" alt="" style="height:100px;width:100px"> </div> `}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!0,contentEditable:!0,gizmo:{title:"Learning Card",description:"An element that you have to replace / fix / improve",icon:"credit-card",color:"blue",groups:["Content","Presentation","Education"]},settings:{configure:[{property:"type",title:"Type",description:"Identifies the card",inputMethod:"select",options:{science:"Science",math:"Math"}}],advanced:[]},demoSchema:[{tag:o.tag,properties:{type:"science"},content:"<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>"}]}}}window.customElements.define(o.tag,o);export{o as CardIcon};
