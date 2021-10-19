import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class CardIcon extends SimpleColors {
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
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'card-icon';
  }

  // constructor() {
  //   super();

  // }


  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {};
  }

  // updated(changedProperties) {
  // }
  //  return {

    };
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
    return [...super.styles,
      css`
      :host {
        display: block;
        background-color: var(--simple-colors-default-theme-accent-8);
        color: var(--simple-color-default-theme-grey-1);
      }
      `
    ];
  }

  // HTML - specific to Lit
  render() {
    return html``;
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