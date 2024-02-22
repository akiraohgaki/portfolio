import { chirit } from '../deps.ts';
import style from './style.ts';

chirit.createComponent('akira-scrolltotop-action', {
  init: (context) => {
    context.onclick = () => {
      globalThis.scrollTo({ top: 0, behavior: 'smooth' });
    };
  },
  template: () => {
    return `
      <style>
      ${style.base}
      </style>

      <style>
      :host {
        cursor: pointer;
      }
      </style>

      <slot></slot>
    `;
  },
});
