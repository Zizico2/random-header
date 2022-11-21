/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, TemplateResult} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
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
  public static override styles = [
    css`
      :host {
        display: block;
        box-sizing: border-box;
      }
      sl-button::part(base) {
        border: none;
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
        --horizontal-padding: 3.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: var(--horizontal-padding);
        padding-right: var(--horizontal-padding);
        align-items: center;
        width: 100%;
        height: 5rem;
        background-color: var(--header-background, var(--brand-color, red));
      }

      nav {
        height: 100%;
        display: flex;
        flex-direction: row;
      }

      #menu-button::part(base) {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
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
        --horizontal-padding: 2rem;
        padding-left: var(--horizontal-padding);
        padding-right: var(--horizontal-padding);
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
        --indicator-width: 75%;
        visibility: hidden;
        position: absolute;
        background-color: white;
        width: var(--indicator-width);
        left: calc((100% - var(--indicator-width)) / 2);
        height: 5px;
        border-radius: 2px;
        bottom: 4px;
      }
    `,
  ];

  @property({type: Array<NavItem>})
  public navItems: NavItem[] = [];

  @state()
  private _current_href: string = window.location.pathname;

  public updateIndicator(): void {
    // TODO: think about this
    this._current_href = window.location.pathname;
  }

  public override render(): TemplateResult {
    const navItemsTemplate: TemplateResult[] = [];
    for (const item of this.navItems) {
      navItemsTemplate.push(
        html`<li
          class="${classMap({
            active: item.href == this._current_href,
          })}"
        >
          <div class="indicator"></div>
          <sl-button
            variant="text"
            class="nav-link"
            href="${item.href}"
            @click="${this.#onClickNavLink}"
            >${item.label}</sl-button
          >
        </li>`
      );
    }
    return html`
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

  #onClickNavLink(ev: MouseEvent): void {
    if (!ev.ctrlKey && !ev.altKey && !ev.shiftKey && !ev.metaKey) {
      ev.preventDefault();
      this._current_href = (ev.target as HTMLAnchorElement).href;
      this.dispatchEvent(
        new NavigationEvent('navigation', {
          detail: {href: this._current_href},
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

export interface NavItem {
  label: string;
  href: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
