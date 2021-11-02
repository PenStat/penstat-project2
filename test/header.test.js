import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/CardHeader.js';

describe('CardHeader', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<card-header slot="banner" type="science">
      <h1 slot="header">UNIT 1</h1>
      <h2 slot="subheader">Learning Objectives</h2>
    </card-header>`);
  });
  it('renders the header element', () => {
    const header = document.querySelector('card-header');
    expect(header).to.exist;
  });

  it('renders the main header', () => {
    const h1 = element.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.innerText).to.equal('UNIT 1');
  });

  it('renders the sub header', () => {
    const h2 = element.querySelector('h2');
    expect(h2).to.exist;
    // console.log(h2.assignedElements({flat: true}));
    expect(h2.innerText).to.equal('Learning Objectives');
  });

  it('passes the a11y audit', async () => {
    element.type = 'science';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'objective';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'question';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });
});
