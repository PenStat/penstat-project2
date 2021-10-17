import { LitElement, html, css } from 'lit';

export class CardFrame extends LitElement {
  static get tag() {
    return 'card-frame';
  }

  constructor() {
    super();

  }

  static get properties() {
    return {

    };
  }

  static get styles() {
    return css`

    `;
  }

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
