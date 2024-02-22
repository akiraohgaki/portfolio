import { chirit } from '../deps.ts';
import style from './style.ts';

chirit.createComponent('akira-badge', {
  observedAttributes: ['color'],
  template: (context) => {
    const color = context.attr.color || 'primary';

    return `
      <style>
      ${style.base}
      </style>

      <style>
      :host {
        border-radius: var(--size-radius);
        padding: var(--size-space-small);
        background-color: var(--color-${color});
        color: var(--color-on-${color});
        font-size: var(--size-text-small);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
      }
      </style>

      <slot></slot>
    `;
  },
});
