/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

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

  /**
   * The name to say "Hello" to.
   */
  @property()
  public navItems = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  public count = 0;

  public override render(): TemplateResult {
    return html` <header></header> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
