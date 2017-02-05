import { html } from 'hyperapp';

const Ideas = (model, msg) => (html`
  <section>
    ${model.ideas.map((idea, index) => html`
      <article
        class="idea ${idea.quality}"
      >
        <h4>${idea.title}</h4>
        <p>${idea.body}</p>
        <button
          key=${index}
          class="add"
          onclick=${(_, e) => msg.changeQuality(_, e)}
        >
          +
        </button>
        <button
          key=${index}
          class="sub"
          onclick=${(_, e) => msg.changeQuality(_, e)}
        >
          -
        </button>
        <button
          key=${index}
          class="delete"
          onclick=${(_, e) => msg.removeIdea(_, e)}
        >
          x
        </button>
      </article>
    `)}
  </section>
`);

export default Ideas;
