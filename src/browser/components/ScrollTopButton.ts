import {Component} from 'chirit';
import * as styles from './styles.js';

export default class ScrollTopButton extends Component {

    protected template(): string {
        return `
            <style>
            ${styles.base}
            </style>

            <style>
            :host {
                cursor: pointer;
            }
            </style>

            <slot onclick="this._handleClick()"></slot>
        `;
    }

    protected _handleClick(): void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

}
