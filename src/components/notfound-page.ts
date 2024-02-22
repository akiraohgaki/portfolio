import { chirit } from '../deps.ts';
import style from './style.ts';

chirit.createComponent('akira-notfound-page', {
  template: () => {
    return `
      <style>
      ${style.base}
      ${style.sections}
      ${style.groupingContent}
      ${style.textLevelSemantics}
      </style>

      <style>
      :host {
        display: block;
      }

      main {
        & article {
          text-align: center;

          & h1 {
            font-size: var(--size-text-large);
            font-weight: normal;
            letter-spacing: 0.1em;
          }
          & span {
            font-size: 128px;
          }
        }
      }
      </style>

      <main>
        <article>
          <span>&#x1f388;</span>
          <h1>Not Found</h1>
          <p><a href="/">Continue to home page.</a></p>
        </article>
      </main>
    `;
  },
});
