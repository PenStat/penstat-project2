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
}

customElements.define(CardFrame.tag, CardFrame);
