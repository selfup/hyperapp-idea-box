const update = {
  updateField: (model, e) =>
    Object.assign({}, model, { [e.target.id]: e.target.value.trim() }),
  submit: (model, e) => {
    e.preventDefault();
    const { title, body } = model;
    if (!title || !body) return model;
    const ideas = [{ title, body, quality: 'swill' }, ...model.ideas];
    return Object.assign({}, model, { ideas, title: '', body: '' });
  },
  lengthCheck: (model, e) => {
    const textLength = e.target.value.split('').length;
    if (textLength > 12) {
      const older = model[e.target.id].split('').slice(0, 12).join('');
      return Object.assign({}, model, { [e.target.id]: older });
    } else if (textLength < 14) {
      return model;
    }
  }
};

export default update;
