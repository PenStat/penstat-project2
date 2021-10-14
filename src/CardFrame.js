import { LitElement, html, css } from 'lit';

export class CardFrame extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'card-frame';
  }

  constructor() {
    super();
    this.reveal = false;
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      reveal: { type: Boolean, reflect: true },
    };
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div>
        <slot id="top-part" name="banner"></slot>
        <slot id="bottom-part" name="content"></slot>
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
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              math: 'Math',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: CardFrame.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}

window.customElements.define(CardFrame.tag, CardFrame);
