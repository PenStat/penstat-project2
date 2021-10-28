import{r as e,p as t}from"./0319ff57.js";import{S as s}from"./ea67f440.js";class r extends s{static get tag(){return"card-header"}static get styles(){return[...super.styles,e`
        :host {
          display: block;
          font-family: 'Open Sans', sans-serif;
          color: white;
          border: 1px transparent;
        }
        .banner-wrapper {
          background-color: var(--simple-colors-default-theme-accent-7);
        },
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,500&display=swap');
      `]}static get properties(){return{...super.properties,type:{type:String},icon:{type:String}}}constructor(){super(),this.dark=!1,this.type="objective",this.icon="lightbulb"}updated(e){super.updated(e),e.forEach(((e,t)=>{"type"===t&&"objective"===this[t]&&(this.icon="objective",this.accentColor="orange"),"type"===t&&"science"===this[t]&&(this.icon="science",this.accentColor="green"),"type"===t&&"question"===this[t]&&(this.icon="question",this.accentColor="blue")}))}render(){return t` <div class="banner-wrapper" style="display:flex"> <card-icon type="${this.icon}" style="width:100px;margin-top:.5em;display:flow"></card-icon> <div class="header-wrapper"> <slot name="header"></slot> <slot name="subheader"></slot> </div> </div> `}}customElements.define(r.tag,r);export{r as CardHeader};
