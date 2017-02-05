import { html } from 'hyperapp';
import IdeaBox from './IdeaBox';

const App = (model, msg) => (html`
  ${IdeaBox(model, msg)}
`);

export default App;
