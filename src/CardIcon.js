// dependencies / things imported
import { LitElement, html, css } from 'lit';

// this is the base path to the assets calculated at run time
// this ensures that assets are shipped correctly when building the demo
// on github pages, or when people reuse assets outside your elements in production
// because this won't change we can leverage as an internal variable without being
// declared in properties. This let's us ship the icons while referencing them correctly
const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;
// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class CardIcon extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'card-icon';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.icon = lightbulb;
    this.type = 'objective';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      icon: { type: String },
      type: { type: String },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = beaker;
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = lightbulb;
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = question;
      }
    });
  }

  // CSS - specific to Lit
  static get styles() {
    return [
      css`
        :host {
          display: block;
          max-width: 6.813em;
        }

        img {
          display: inline-flex;
          height: var(--learning-card-height, 100px);
          width: var(--learning-card-width, 100px);
        }
      `,
    ];
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="outline">
        <img src="${this.icon}" alt="" />
      </div>
    `;
  }
}
window.customElements.define(CardIcon.tag, CardIcon);
