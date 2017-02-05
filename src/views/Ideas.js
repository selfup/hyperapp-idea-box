import { html } from 'hyperapp';

const Ideas = model => (html`
  <section>
    ${model.ideas.map((idea, index) => html`
      <article
        key=${index}
        class="idea ${idea.quality}"
      >
        <h4>${idea.title}</h4>
        <p>${idea.body}</p>
      </article>
    `)}
  </section>
`);

export default Ideas;
