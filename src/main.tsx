import { render } from 'preact';
import { App } from './pages/App';
import './style.css';

// Inject our app into the DOM
const appElement = document.getElementById('app');
appElement && render(<App />, appElement);
