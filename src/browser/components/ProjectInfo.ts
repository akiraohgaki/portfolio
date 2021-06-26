import { Component } from 'chirit';
import * as styles from './styles.js';

export default class ProjectInfo extends Component {

  static get observedAttributes(): Array<string> {
    return ['url', 'image', 'tags'];
  }

  protected template(): string {
    const url = this.attrs.url || '';
    const image = this.attrs.image || '';
    const tags = this.attrs.tags || '';

    const linkHtml = url ? `<a href="${url}">${url}</a>` : '';

    let tagsHtml = '';

    if (tags) {
      for (let tag of tags.split(',')) {
        tag = tag.trim();
        if (tag) {
          tagsHtml += `<span>${tag}</span>`;
        }
      }
    }

    return `
      <style>
      ${styles.base}
      ${styles.groupingContent}
      ${styles.textLevelSemantics}
      </style>

      <style>
      :host {
        --size-cell: 320px;

        display: flex;
        flex-flow: column nowrap;
        gap: var(--size-space);
      }

      :host::before {
        content: ' ';
        display: block;
        width: var(--size-cell);
        height: var(--size-cell);
        border-radius: var(--size-radius);
        background: url(${image}) no-repeat center center / cover;
        box-shadow: 0px 3px var(--size-shadow) var(--color-shadow);
      }

      div {
        width: var(--size-cell);
        text-align: center;
      }

      #link {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: var(--size-space-large) 0;
      }

      #tags {
        display: flex;
        flex-flow: row wrap;
        gap: var(--size-space-small);
        justify-content: center;
        margin-bottom: 0;
      }

      #tags span {
        display: inline-block;
        border-radius: var(--size-radius);
        padding: var(--size-space-small);
        background-color: var(--color-information);
        color: var(--color-on-information);
        font-size: var(--size-text-small);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
      }

      @media (min-width: 640px) {
        :host {
          --size-cell: 500px;
        }
      }

      @media (min-width: 1024px) {
        :host {
          --size-cell: 425px;

          flex-flow: row nowrap;
          gap: calc(var(--size-cell) / 5);
        }

        div {
          text-align: left;
        }

        #tags {
          justify-content: start;
        }
      }

      @media (min-width: 1280px) {
        :host {
          --size-cell: 500px;
        }
      }
      </style>

      <div>
      <slot name="title"></slot>
      <slot></slot>
      <p id="link">${linkHtml}</p>
      <p id="tags">${tagsHtml}</p>
      </div>
    `;
  }

}
