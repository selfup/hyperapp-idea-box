import { app } from 'hyperapp';
import update from './updates/idea-box';
import model from './models/idea-box';
import App from './views/App';

app({ model, update, view: App });
