import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class CardHeader extends SimpleColors {
  static get tag() {
    return 'card-header';
  }

  constructor() {
    super();
    this.type = 'objective';
    this.icon = 'lightbulb';
  }

  static get properties() {
    return {};
  }

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
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="banner-wrapper">
        <card-icon icon="${this.icon}"></card-icon>
        <div class="header-wrapper">
          <slot name="header"></slot>
          <slot name="subheader"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(CardHeader.tag, CardHeader);
