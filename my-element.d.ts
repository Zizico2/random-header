/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, TemplateResult, PropertyValues } from 'lit';
import '@shoelace-style/shoelace/dist/components/button/button.js';
export declare class NavigationEvent extends CustomEvent<{
    href: string;
}> {
}
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    navItems: NavItem[];
    private _current_href;
    protected updated(changedProperties: PropertyValues): void;
    updateIndicator(): void;
    render(): TemplateResult;
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
//# sourceMappingURL=my-element.d.ts.map