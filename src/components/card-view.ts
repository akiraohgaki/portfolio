import { chirit } from '../deps.ts';
import style from './style.ts';

chirit.createComponent('akira-card-view', {
  observedAttributes: ['image'],
  template: (context) => {
    const image = context.attr.image || '';

    return `
      <style>
      ${style.base}
      </style>

      <style>
      :host {
        --size-cell: 320px;

        display: grid;
        grid-template:
          "image" auto
          "content" auto
          / var(--size-cell);
        gap: var(--size-space);
        width: fit-content;
        text-align: center;
      }

      #image {
        grid-area: image;

        &::before {
          content: ' ';
          display: inline-block;
          width: var(--size-cell);
          height: var(--size-cell);
          border-radius: var(--size-radius);
          background: url(${image}) no-repeat center center / cover;
          box-shadow: 0px 3px var(--size-shadow) var(--color-shadow);
        }
      }

      #content {
        grid-area: content;
      }

      @media (width >= 640px) {
        :host {
          --size-cell: 500px;
        }
      }
      @media (width >= 1024px) {
        :host {
          --size-cell: 425px;

          grid-template:
            "image content" auto
            / var(--size-cell) var(--size-cell);
          gap: calc(var(--size-cell) / 5);
          text-align: left;
        }
      }
      @media (width >= 1280px) {
        :host {
          --size-cell: 500px;
        }
      }
      </style>

      <div id="image"></div>
      <div id="content"><slot></slot></div>
    `;
  },
});
