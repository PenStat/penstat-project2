// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './CardFrame.js';

const arrow = new URL('../assets/arrow.svg', import.meta.url).href;

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class LearningCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'learning-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.type = 'objective';
    this.arrow = arrow;
    this.visible = false;
    setTimeout(() => {
      import('./CardHeader.js');
      import('./CardIcon.js');
      import('./ToggleContent.js');
    }, 0);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      // reflect allows state changes to the element's property to be leveraged in CSS selectors
      type: { type: String, reflect: true },
      heading: { type: String },
      subheading: { type: String },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
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
    return css`
      :host {
        display: block;
        min-width: 20em;
      }

      /* this is how you match something on the tag itself like <learning-card type="math"> and then style the img inside */
      :host([type='math']) img {
        background-color: purple;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <card-frame>
        <card-header slot="banner" type="${this.type}">
          <h1
            slot="header"
            aria-label="Main header"
            style="font-family: 'Open Sans', sans-serif; font-weight: 300;"
          >
            <slot name="header">${this.heading}</slot>
          </h1>
          <h2
            slot="subheader"
            aria-label="Sub Header"
            style='font-family: "Open Sans", sans-serif; font-weight: 500;'
          >
            <slot name="subheader">${this.subheading}</slot>
          </h2>
        </card-header>
        <toggle-content
          style="margin-right: 5em; min-height: 40px; display: flex;"
          slot="content"
        >
          <slot></slot>
        </toggle-content>
      </card-frame>
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
        description: 'An element for displaying headings for classes in cards',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Changes the type of the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              objective: 'Objective',
              question: 'Question',
            },
          },
          {
            property: 'heading',
            title: 'Heading',
            description: 'Heading for the card',
            inputMethod: 'textfield',
          },
          {
            property: 'subheading',
            title: 'Sub-heading',
            description: 'Sub-heading for the card',
            inputMethod: 'textfield',
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningCard.tag,
          properties: {
            type: 'science',
          },
          content: '-Your card content goes here-',
        },
      ],
    };
  }
}
