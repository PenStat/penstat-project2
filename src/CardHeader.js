import { LitElement, html, css } from 'lit';

export class CardHeader extends LitElement {
  static get tag() {
    return 'card-header';
  }

  // constructor() {
  //   super();
  // }

  static get properties() {
    return {};
  }

  // updated(changedProperties) {
  // }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
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
