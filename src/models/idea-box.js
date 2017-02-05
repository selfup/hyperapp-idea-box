import lspi from 'lspi';

class Store {
  constructor() {
    const ideas = lspi.get('ideas');
    this.model = {
      ideas: [],
      title: '',
      body: '',
    };
    if (!ideas) {
      lspi.set('ideas', this.model.ideas);
    } else {
      Object.assign(this.model, { ideas });
    }
  }
}

const model = new Store().model;

export default model;
