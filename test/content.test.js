import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<toggle-content>
      <p>WE HAVE TOGGLED CONTENT</p>
    </toggle-content>`);
  });
  it('renders the element', () => {
    const main = document.querySelector('toggle-content');
    expect(main).to.exist;
  });

  it('renders the p tag', () => {
    const p = element.querySelector('p');
    expect(p).to.exist;
    expect(p.innerText).to.equal('WE HAVE TOGGLED CONTENT');
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
