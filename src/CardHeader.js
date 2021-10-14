import { LitElement, html, css } from 'lit';

export class CardHeader extends LitElement {
  static get tag() {
    return 'card-header';
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
    };
  }

  updated(changedProperties) {
  }

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

    `;
  }

}

customElements.define(CardHeader.tag, CardHeader);
