import lspi from 'lspi';

const qualityKey = {
  add: {
    swill: 'plausible',
    plausible: 'genius',
    genius: 'genius',
  },
  sub: {
    swill: 'swill',
    plausible: 'swill',
    genius: 'plausible',
  },
};

const update = {
  updateField: (model, e) => ({ [e.target.id]: e.target.value.trim() }),
  submit: (model, e) => {
    e.preventDefault();
    const { title, body } = model;
    if (!title || !body) return model;
    const ideas = [{ title, body, quality: 'swill' }, ...model.ideas];
    lspi.set('ideas', ideas);
    return { ideas, title: '', body: '' };
  },
  lengthCheck: (model, e) => {
    const textLength = e.target.value.split('').length;
    if (textLength > 12) {
      const older = model[e.target.id].split('').slice(0, 12).join('');
      return { [e.target.id]: older };
    }
    return model;
  },
  changeQuality: (model, e) => {
    const direction = e.target.className;
    const id = +e.target.key;
    const ideas = model.ideas.map((element, index) => {
      const idea = Object.assign({}, element);
      if (index === id) {
        idea.quality = qualityKey[direction][idea.quality];
        return idea;
      }
      return idea;
    });
    lspi.set('ideas', ideas);
    return { ideas };
  },
  removeIdea: (model, e) => {
    const id = +e.target.key;
    const ideas = model.ideas.filter((idea, idx) => idx !== id);
    lspi.set('ideas', ideas);
    return { ideas };
  },
};

export default update;
