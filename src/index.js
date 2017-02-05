import { app } from 'hyperapp';
import update from './updates/idea-box';
import model from './models/idea-box';
import view from './views/App';

app({ model, update, view });
