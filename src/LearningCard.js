// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './CardFrame.js';

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
    // this.heading = 'Unit 1';
    // this.subheading = 'Learning Objectives';
    setTimeout(() => {
      import('./CardHeader.js');
      import('./CardIcon.js');
    }, 0);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      // reflect allows state changes to the element's property to be leveraged in CSS selectors
      type: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = 'lightbulb';
        console.log(this.icon);
        console.log('lightbulb');
      }
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = 'beaker';
        console.log(this.icon);
        console.log('beaker');
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = 'question';
        console.log(this.icon);
        console.log('question');
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
      img {
        display: inline-flex;
        height: var(--learning-card-height, 100px);
        width: var(--learning-card-width, 100px);
        background-color: green;
      },

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
            <slot name="header"></slot>
          </h1>
          <h2
            slot="subheader"
            aria-label="Sub Header"
            style='font-family: "Open Sans", sans-serif; font-weight: 500;'
          >
            <slot name="subheader"></slot>
          </h2>
        </card-header>
        <div slot="content" style="margin-left: 5em; margin-right: 5em;">
          <slot></slot>
        </div>
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
          tag: LearningCard.tag,
          properties: {
            type: 'science',
          },
        },
      ],
    };
  }
}
