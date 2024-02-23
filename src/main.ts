import { chirit } from './deps.ts';
import './components/mod.ts';

const router = new chirit.Router('history', '/');

router.set('^/(index(\.html)?)?$', () => {
  document.body.appendChild(document.createElement('akira-index-page'));
});
router.set('.*', () => {
  document.body.appendChild(document.createElement('akira-notfound-page'));
});

router.navigate(location.href);
