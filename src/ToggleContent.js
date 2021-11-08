// dependencies / things imported
import { LitElement, html, css } from 'lit';

const arrow = new URL('../assets/arrow.svg', import.meta.url).href;

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class ToggleContent extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'toggle-content';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.arrow = arrow;
    this.visible = false;
  }

  static get properties() {
    return {
      visible: { type: Boolean, reflect: true },
    };
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', this.toggleContent.bind(this));
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
        min-width: 20em;
      }

      img {
        display: inline-flex;
        height: var(--learning-card-height, 100px);
        width: var(--learning-card-width, 100px);
      }

      .rotate {
        transition: transform 0.5s ease-in;
      }

      .hidden {
        transform: scale(0) translateY(-100%);
        min-height: 40px;
        max-height: 40px;
        transition: transform 0.5s ease-in, max-height 0.5s ease-in;
      }

      .visible {
        overflow: hidden;
        transform: scale(100%) translateY(0);
        min-height: 40px;
        max-height: 1000px;
        transition: max-height 0.5s ease-in, transform 0.5s ease-in;
      }
      button {
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0;
      }
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'visible' && this.shadowRoot) {
        const img = this.shadowRoot.querySelector('img');
        const slotwrap = this.shadowRoot.querySelector('#slotwrap');
        if (this[propName]) {
          img.style.transform = 'rotate(0deg)';
          slotwrap.className = 'hidden';
        } else {
          img.style.transform = 'rotate(90deg)';
          slotwrap.className = 'visible';
        }
      }
    });
  }

  toggleContent() {
    this.visible = !this.visible;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <button title="Click to toggle content">
        <img
          src="${this.arrow}"
          class="rotate"
          alt=""
          style="max-height: 40px; max-width: 40px; rotation: 90deg; display: inline-flex;"
        />
      </button>
      <div id="slotwrap" class="hidden">
        <slot></slot>
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
          tag: ToggleContent.tag,
          properties: {
            type: 'science',
          },
        },
      ],
    };
  }
}
window.customElements.define(ToggleContent.tag, ToggleContent);
