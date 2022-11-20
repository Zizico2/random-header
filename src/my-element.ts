/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

export class NavigationEvent extends CustomEvent<{href: string}> {}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  public static override styles = css`
    :host {
      display: block;
    }
    header {
      width: 100%;
      height: 10rem;
      background-color: green;
    }
  `;

  @property({type: Array<NavItem>})
  public navItems: NavItem[] = [];

  public override render(): TemplateResult {
    return html`
      <header>${[html`<div>hi</div>`, html`<div>bye</div>`]}</header>
    `;
  }
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


export interface NavItem {
  name: string;
  href: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
