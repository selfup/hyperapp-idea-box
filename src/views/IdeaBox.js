import { html } from 'hyperapp';
import Ideas from './Ideas';
import Inputs from './Inputs';

const view = (model, msg) => (html`
  <div class="idea-box">
    <h1>IdeaBox 13</h1>
    ${Inputs(model, msg)}
    ${Ideas(model)}
  </div>
`);

export default view;
