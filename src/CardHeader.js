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
    };
  }

  constructor() {
    super();
    this.accentColor = 'red';
    this.dark = false;
  } // end costructor

  // updated(changedProperties) {
  // }

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
