// @ts-expect-error
import { component } from 'reefjs';
import { cards } from './pages/cards';
import { card } from './pages/card';
import './style.css';

component('#cards', cards);
component('#card', card);
