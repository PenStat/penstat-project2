import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class CardIcon extends SimpleColors {
  // EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
  // which has the magic life-cycles and developer experience below added
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'card-icon';
  }

  constructor() {
    super();
    this.icon = lightbulb;
    this.altText = 'A lightbulb icon';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
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

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
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
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
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
