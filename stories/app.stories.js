import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'learning-card',
  argTypes: {
    type: {
      control: 'radio',
      options: ['science', 'objective', 'question'],
    },
    headingSlot: {
      control: 'text',
    },
    subheadingSlot: {
      control: 'text',
    },
  },
};

function Template({ type = 'math', headingSlot, subheadingSlot, slot }) {
  return html`
    <learning-card type="${type}">
      <div slot="header">${headingSlot}</div>
      <div slot="subheader">${subheadingSlot}</div>
      ${slot}
    </learning-card>
  `;
}

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  headingSlot: html`<span>Unit 1</span>`,
  subheadingSlot: html`<span>Chem Connection</span>`,
  slot: html`<ul>
    <li>One</li>
    <li>Two</li>
  </ul>`,
};

export const ObjectiveCard = Template.bind({});
ObjectiveCard.args = {
  type: 'objective',
  headingSlot: html`<span>Unit 1</span>`,
  subheadingSlot: html`<span>Learning Objectives</span>`,
  slot: html`<ul>
    <li>One</li>
    <li>Two</li>
  </ul>`,
};

export const QuestionCard = Template.bind({});
QuestionCard.args = {
  type: 'question',
  headingSlot: html`<span>Unit 1</span>`,
  subheadingSlot: html`<span>Did You Know?</span>`,
  slot: html`<ul>
    <li>One</li>
    <li>Two</li>
  </ul>`,
};
