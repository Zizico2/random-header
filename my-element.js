/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MyElement_instances, _MyElement_onClickNavLink;
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
export class NavigationEvent extends CustomEvent {
}
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        _MyElement_instances.add(this);
        this.navItems = [];
        this._current_href = window.location.pathname;
    }
    updated(changedProperties) {
        if (changedProperties.has('_current_href')) {
            //history.pushState({}, '', this._current_href);
        }
    }
    updateIndicator() {
        this._current_href = window.location.pathname;
    }
    render() {
        const navItemsTemplate = [];
        for (const item of this.navItems) {
            navItemsTemplate.push(html `<li
          class="${classMap({
                active: item.href == this._current_href,
            })}"
        >
          <div class="indicator"></div>
          <sl-button
            variant="text"
            class="nav-link"
            href="${item.href}"
            @click="${__classPrivateFieldGet(this, _MyElement_instances, "m", _MyElement_onClickNavLink)}"
            >${item.label}</sl-button
          >
        </li>`);
        }
        return html `
      <header>
        <sl-button id="menu-button" size="large" caret>
          Wolfgang Fuertauer
        </sl-button>
        <nav>
          <ul>
            ${navItemsTemplate}
          </ul>
        </nav>
        <sl-button variant="text" id="logo" href="/demo">
          <img src="https://placeholder.pics/svg/80x50" alt="Foresight Logo" />
        </sl-button>
      </header>
    `;
    }
};
_MyElement_instances = new WeakSet(), _MyElement_onClickNavLink = function _MyElement_onClickNavLink(ev) {
    if (!ev.ctrlKey) {
        ev.preventDefault();
        this._current_href = ev.target.href;
        this.dispatchEvent(new NavigationEvent('navigation', {
            detail: { href: this._current_href },
            bubbles: true,
            composed: true,
        }));
    }
};
MyElement.styles = [
    css `
      :host {
        display: block;
      }
      sl-button::part(base) {
        border: none;
      }
      #menu-button::part(base) {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      li {
        all: unset;
      }
      ul {
        display: contents;
      }
      header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 3.5rem;
        padding-right: 3.5rem;
        align-items: center;
        width: 100%;
        height: 5rem;
        background-color: var(--header-background, var(--brand-color, red));
      }
      .nav-link {
        width: 100%;
        height: 100%;
        display: flex;
        place-items: center;
        place-content: center;
      }
      .nav-link::part(label) {
        color: white;
      }
      .nav-link::part(base) {
        padding-left: 2rem;
        padding-right: 2rem;
        display: flex;
        place-items: center;
        place-content: center;
        width: 100%;
        height: 100%;
        border-radius: 0;
        border: 3px solid transparent;
      }
      .nav-link::part(base):focus-visible {
        transition: none;
        border-color: yellow;
        outline: none;
      }

      nav {
        height: 100%;
        display: flex;
        flex-direction: row;
      }
      #logo::part(base) {
        width: fit-content;
        height: fit-content;
      }
      #logo::part(label) {
        display: contents;
      }
      li.active > .indicator {
        visibility: visible;
      }
      li {
        position: relative;
      }
      .indicator {
        visibility: hidden;
        position: absolute;
        background-color: white;
        width: 75%;
        left: 12.5%;
        height: 5px;
        border-radius: 2px;
        bottom: 4px;
      }
    `,
];
__decorate([
    property({ type: (Array) })
], MyElement.prototype, "navItems", void 0);
__decorate([
    state()
], MyElement.prototype, "_current_href", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map