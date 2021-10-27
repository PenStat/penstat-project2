import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <learning-card type="science">
      <span slot="header">Science Card</span>
      <span slot="subheader">Today's topic: Bio</span>
      <p>Don't learn bio</p>
      <ul>
        <li>Bio</li>
        <li>Chem</li>
        <li>Glycolysis</li>
      </ul>
    </learning-card>`);
  });

  it('renders an h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    console.log(h1);
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Science Card');
  });

  it('renders an h2', () => {
    const h2 = element.shadowRoot.querySelector('h2');
    console.log(h2);
    expect(h2).to.exist;
    expect(h2.textContent).to.equal("Today's topic: Bio");
  });

  it('renders main content', () => {
    const para = element.shadowRoot.querySelector('p');
    console.log(para);
    expect(para).to.exist;
    expect(para.textContent).to.equal("Don't learn bio");

    const list = element.shadowRoot.querySelector('ul');
    expect(list).to.exist;
    expect(list.innerText).to.equal(html`<li>Bio</li>
      <li>Chem</li>
      <li>Glycolysis</li>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
