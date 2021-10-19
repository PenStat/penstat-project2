import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class CardIcon extends SimpleColors {
  static get tag() {
    return 'card-icon';
  }

  constructor() {
    super();
    this.icon = lightbulb;
    this.altText = 'A lightbulb icon';
  }

  static get properties() {
    return {
      icon: { type: String },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'icon' && this[propName] === 'beaker') {
        this.icon = beaker;
        this.altText = 'A beaker icon';
      }
      if (propName === 'icon' && this[propName] === 'lightbulb') {
        this.icon = lightbulb;
        this.altText = 'A lightbulb icon';
      }
      if (propName === 'icon' && this[propName] === 'question') {
        this.icon = question;
        this.altText = 'A question mark icon';
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
        div {
          corner-radius: 100%;
          background-color: var(--simple-colors-default-theme-grey-6);
          height: 200px;
          width: 200px;
        }
        img {
          height: 200px;
          width: auto;
        }
      `,
    ];
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div>
        <img src="${this.icon}" alt="${this.altText}" />
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: '',
        description: '',
        icon: '',
        color: '',
        groups: [],
      },
      settings: {
        configure: [
          {
            property: '',
            title: '',
            description: '',
            inputMethod: '',
            options: {},
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: CardIcon.tag,
          properties: {},
          content: '',
        },
      ],
    };
  }
}
customElements.define(CardIcon.tag, CardIcon);
