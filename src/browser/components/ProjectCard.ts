import {Component} from 'chirit';
import * as styles from './styles.js';

export default class LinkCard extends Component {

    static get observedAttributes(): Array<string> {
        return ['url', 'image', 'tags'];
    }

    protected template(): string {
        const linkAttr = this.attrs.url
            ? `href="${this.attrs.url}" onclick=""`
            : 'href="" onclick="event.preventDefault()"';
        const image = this.attrs.image || '';
        let tags = '';

        if (this.attrs.tags) {
            for (let tag of this.attrs.tags.split(',')) {
                tag = tag.trim();
                if (tag) {
                    tags += `<span>${tag}</span>`;
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
                --color-surface: rgba(0, 0, 0, 0.8);
                --color-on-surface: #f7f7f7;
            }

            :host {
                display: inline-flex;
                flex-flow: column nowrap;
                width: 500px;
                height: 500px;
                border-radius: var(--size-radius-large);
                background: var(--color-surface) url(${image}) no-repeat center center / cover;
                color: var(--color-on-surface);
                text-align: center;
                vertical-align: bottom;
            }

            :host::before {
                content: ' ';
                display: block;
                flex: auto;
            }

            div {
                border-radius: var(--size-radius-large);
                margin: var(--size-space);
                background-color: var(--color-surface);
            }

            a {
                display: block;
                padding: var(--size-space-large);
            }

            a[href=""] {
                cursor: not-allowed;
            }

            p {
                margin: 0;
                font-size: var(--size-text-small);
            }

            p span {
                display: inline-block;
                border-radius: var(--size-radius);
                margin: var(--size-space-small);
                padding: var(--size-space-small);
                background-color: var(--color-information);
                color: var(--color-on-information);
                line-height: 1;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
            }
            </style>

            <div>
            <a ${linkAttr}>
            <slot name="title"></slot>
            <slot></slot>
            </a>
            <p>${tags}</p>
            </div>
        `;
    }

}
