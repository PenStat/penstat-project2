import { LitElement, html, css } from 'lit';

const arrow = new URL('../assets/arrow.svg', import.meta.url).href;

export class ToggleContent extends LitElement {
  static get tag() {
    return 'toggle-content';
  }

  constructor() {
    super();
    this.arrow = arrow;
    this.visible = false;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.shadowRoot
      .querySelector('img')
      .addEventListener('click', this.toggleContent.bind(this));
  }

  static get styles() {
    return css`
      :host {
        min-width: 20em;
        margin-right: 5em;
        min-height: 40px;
        display: flex;
      }

      img {
        display: inline-flex;
        height: var(--learning-card-height, 100px);
        width: var(--learning-card-width, 100px);
        max-height: 40px;
        max-width: 40px;
        rotation: 90deg;
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
    `;
  }

  toggleContent() {
    const img = this.shadowRoot.querySelector('img');
    if (this.visible) {
      const slot = this.shadowRoot.querySelector('.visible');
      // console.log(slot.clientHeight);
      img.style.transform = 'rotate(0deg)';
      slot.className = 'hidden';
    } else {
      const slot = this.shadowRoot.querySelector('.hidden');
      img.style.transform = 'rotate(90deg)';
      slot.className = 'visible';
    }
    this.visible = !this.visible;
  }

  render() {
    return html`
      <img src="${this.arrow}" class="rotate" alt="Dropdown arrow" />
      <div class="hidden">
        <slot></slot>
      </div>
    `;
  }

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
