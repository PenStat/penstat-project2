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
  it('renders the main header', () => {
    const h1 = element.shadowRoot.querySelector('h1 slot');
    expect(h1).to.exist;
    expect(h1.assignedElements({ flat: true })[0].innerText).to.equal(
      'Science Card'
    );
  });

  it('renders the sub header', () => {
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
    element.type = 'science';
    expect(element.type).to.equal('science');
    expect(element.icon).to.equal('beaker');
    element.type = 'objective';
    setTimeout(() => {
      expect(element.type).to.equal('objective');
      expect(element.icon).to.equal('lightbulb');
    }, 100);
    element.type = 'question';
    setTimeout(() => {
      expect(element.type).to.equal('question');
      expect(element.icon).to.equal('question');
    }, 100);
  });

  it('checks basic properties', async () => {
    const element2 = await fixture(html` <learning-card type="objective">
      <span slot="header">UNIT 1</span>
      <span slot="subheader">LEARNING OBJECTIVES</span>
      <ul>
        <li>Describe the subatomic particles that make up an atom.</li>
        <li>
          use the periodic table to determine the numbers of protons and
          electrons in a neutral (uncharged) atom.
        </li>
        <li>Describe the subatomic particles that make up an atom.</li>
        <li>
          use the periodic table to determine the numbers of protons and
          electrons in a neutral (uncharged) atom.
        </li>
      </ul>
    </learning-card>`);
    const element3 = await fixture(html` <learning-card type="question">
      <span slot="header">UNIT 1</span>
      <span slot="subheader">DID YOU KNOW?</span>
      <p>
        There is about 0.4 pounds or 200 grams of salt (NaCl) in the average
        adult human body.
      </p>
    </learning-card>`);
    expect(element.type).to.equal('science');
    expect(element.icon).to.equal('beaker');
    expect(element2.type).to.equal('objective');
    expect(element2.icon).to.equal('lightbulb');
    expect(element3.type).to.equal('question');
    expect(element3.icon).to.equal('question');
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
