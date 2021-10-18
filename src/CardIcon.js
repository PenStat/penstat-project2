import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class CardIcon extends SimpleColors {
  static get tag() {
    return 'card-icon';
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
