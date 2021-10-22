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
          --card-header-color1: darkorange;
          --card-header-color2: green;
          --card-header-color3: blue;
        }

        :host([type='objective']) {
          --card-header-color1: darkorange;
        }
        /* end objective */

        :host([type='science']) {
          --card-header-color2: green;
        }
        /* end science */

        :host([type='question']) {
          --card-header-color3: blue;
        }
        /* end question */
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
