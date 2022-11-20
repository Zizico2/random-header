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
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
        this.navItems = [];
        /*
        #navLink(label: string, href: string): TemplateResult {
          return html`
            <sl-button
              variant="text"
              class="nav-link"
              href="${href}"
              @click="${(ev: MouseEvent): void => {
                if (!ev.ctrlKey) {
                  this.dispatchEvent(
                    new NavigationEvent('navigation', {
                      detail: {href},
                      bubbles: true,
                      composed: true,
                    })
                  );
                  ev.preventDefault();
                  window.history.pushState({}, '', href);
                }
              }}"
              >${label}</sl-button
            >
          `;
        }
        */
    }
    render() {
        return html `
      <header>${[html `<div>hi</div>`, html `<div>bye</div>`]}</header>
    `;
    }
};
MyElement.styles = css `
    :host {
      display: block;
    }
    header {
      width: 100%;
      height: 10rem;
      background-color: green;
    }
  `;
__decorate([
    property({ type: (Array) })
], MyElement.prototype, "navItems", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map