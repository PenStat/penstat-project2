import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class CardHeader extends SimpleColors {
  static get tag() {
    return 'card-header';
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        .banner-wrapper {
          background-color: var(--simple-colors-default-theme-accent-6);
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
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = 'objective';
        this.accentColor = 'orange';
      }
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = 'science';
        this.accentColor = 'green';
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = 'question';
        this.accentColor = 'blue';
      }
    });
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="banner-wrapper" style="display: flex;">
        <card-icon type="${this.icon}" style="width: 100px"></card-icon>
        <div class="header-wrapper">
          <slot name="header"></slot>
          <slot name="subheader"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(CardHeader.tag, CardHeader);
