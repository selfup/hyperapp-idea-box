import { html } from 'hyperapp';

const Inputs = (model, msg) => (html`
  <div class="inputs">
    <form class="form">
      <input
        id="title"
        placeholder="title"
        value=${model.title}
        onkeyup=${(_, e) => msg.updateField(_, e)}
        onkeydown=${(_, e) => msg.lengthCheck(_, e)}
      /><br />
      <input
        id="body"
        placeholder="body"
        value=${model.body}
        onkeyup=${(_, e) => msg.updateField(_, e)}
        onkeydown=${(_, e) => msg.lengthCheck(_, e)}
      /><br /><br />
      <button
        class="submit"
        onclick=${(_, e) => msg.submit(_, e)}
      >
        Submit
      </button>
    </form><br />
  </div>
`);

export default Inputs;
