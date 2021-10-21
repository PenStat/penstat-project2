import { LitElement, html, css } from 'lit';

export class CardHeader extends LitElement {
  static get tag() {
    return 'card-header';
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: transparent;
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.accentColor = 'red';
    this.dark = false;
    this.type = 'objective';
    this.icon = 'lightbulb';
  } // end costructor

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = 'lightbulb';
      }
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = 'question';
      }
    });
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="slot-wrapper">
        <div data-label="Header" data-layout-slotname="header">
          <slot name="header"></slot>
        </div>
        <div data-label="SubHeader" data-layout-slotname="subheader">
          <slot name="subheader"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(CardHeader.tag, CardHeader);
