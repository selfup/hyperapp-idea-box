import { html } from 'hyperapp';

const Ideas = (model, msg) => (html`
  <section class="ideas">
    ${model.ideas.map((idea, index) => html`
      <article class="idea-box">
        <h4 class="${idea.quality}">${idea.title}</h4>
        <p>${idea.body}</p>
        <div class="actions">
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
        </div>
      </article>
    `)}
  </section>
`);

export default Ideas;
