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
    const h1 = element.shadowRoot.querySelector('h1 slot');
    expect(h1).to.exist;
    expect(h1.assignedElements({ flat: true })[0].innerText).to.equal(
      'Science Card'
    );
  });

  it('renders an h2', () => {
    const h2 = element.shadowRoot.querySelector('h2 slot');
    expect(h2).to.exist;
    // console.log(h2.assignedElements({flat: true}));
    expect(h2.assignedElements({ flat: true })[0].innerText).to.equal(
      "Today's topic: Bio"
    );
  });

  it('renders main content', () => {
    const para = element.querySelector('p');
    expect(para).to.exist;
    expect(para.textContent).to.equal("Don't learn bio");

    const list = element.querySelector('ul');
    expect(list).to.exist;
    expect(list.children.length).to.equal(3);
  });

  it('checks updatedProperties', () => {
    expect(element.type).to.equal('science');
    expect(element.icon).to.equal('beaker');
    element.type = 'objective';
    expect(element.type).to.equal('objective');
    expect(element.icon).to.equal('lightbulb');
    element.type = 'question';
    expect(element.type).to.equal('question');
    expect(element.icon).to.equal('question');
  });

  // it('passes the a11y audit', async () => {
  //   element.type = 'science';
  //   await expect(element).shadowDom.to.be.accessible();
  //   element.type = 'objective';
  //   await expect(element).shadowDom.to.be.accessible();
  //   element.type = 'question';
  //   await expect(element).shadowDom.to.be.accessible();
  // });
});
