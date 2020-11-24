/**
 * @license
 * Copyright (C) 2015 Vaadin Ltd.
 * This program is available under Apache License 2.0
 */

import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';

/**
 * `<vcf-spreadsheet-cell>` is a cell for vcf-spreadsheet-light.
 *
 * ```html
 * <vcf-spreadsheet-cell></vcf-spreadsheet-cell>
 * ```
 *
 * @memberof Vaadin
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @demo demo/index.html
 */
class VcfSpreadsheetCell extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          box-sizing: border-box;
          display: block;
          overflow: hidden;

          height: 100%;
          width: 100%;
        }

        #label {
          box-sizing: border-box;
          min-height: 1em;
          height: 100%;
          width: 100%;
        }

        #label[contenteditable] {
          border: #fafafa 1px solid;
        }
      </style>

      <div id="label" contenteditable>[[value]]</div>
    `;
  }

  static get is() {
    return 'vcf-spreadsheet-cell';
  }

  static get version() {
    return '1.0.2';
  }

  /**
   * Use for one-time configuration of your component after local DOM is
   * initialized.
   */
  ready() {
    super.ready();

    this._boundCellSelected = this._cellSelected.bind(this);
    this._boundCellBlurred = this._cellBlurred.bind(this);
    this._boundLabelKeyDown = this._labelKeyDown.bind(this);
    this._boundLabelKeyUp = this._labelKeyUp.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.$.label.addEventListener('keydown', this._boundLabelKeyDown);
    this.$.label.addEventListener('keyup', this._boundLabelKeyUp);
    this.$.label.addEventListener('focus', this._boundCellSelected);
    this.$.label.addEventListener('blur', this._boundCellBlurred);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.$.label.removeEventListener('keydown', this._boundLabelKeyDown);
    this.$.label.removeEventListener('keyup', this._boundLabelKeyUp);
    this.$.label.removeEventListener('focus', this._boundCellSelected);
    this.$.label.removeEventListener('blur', this._boundCellBlurred);
  }

  static get properties() {
    return {
      /** *
       * Identifies the inner value of the cell.
       */
      value: {
        type: String,
        value: '',
        reflectToAttribute: true
      },

      /** *
       * Identifies whether the cell is selected/focused or not.
       */
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /** *
       * Column name indicator.
       */
      col: {
        type: String
      },

      /** *
       * The row number of the cell.
       */
      row: {
        type: Number,
        reflectToAttribute: true
      },

      /** *
       * CSS Background color value.
       */
      backgroundColor: {
        type: String,
        reflectToAttribute: true
      },

      /** *
       * CSS Text color value.
       */
      textColor: {
        type: String,
        reflectToAttribute: true
      },

      /** *
       * Indicates whether the cell contains a formula or not.
       */
      hasFormula: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /** *
       * Is the control key down or not.
       */
      _ctrlDown: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return ['_styleChanged(backgroundColor, textColor)'];
  }

  focus(ctrlDown = false) {
    this.$.label.focus();
    this.set('_ctrlDown', ctrlDown);
  }

  _styleChanged(backgroundColor, textColor) {
    this.$.label.style.color = textColor;
    this.style.backgroundColor = backgroundColor;
  }

  _cellSelected() {
    this.set('selected', true);

    if (this.hasFormula) {
      this.$.label.innerText = this.value;
    }

    this.dispatchEvent(
      new CustomEvent('vcf-spreadsheet-cell-selected', {
        bubbles: true,
        composed: true,
        detail: {
          col: this.col,
          row: this.row
        }
      })
    );
  }

  _cellBlurred() {
    // TODO: This should be done in a better way.
    const val = this.$.label.innerText;
    this.set('value', val);
    if (val.startsWith('=')) {
      this.$.label.innerText = '';
      this.set('hasFormula', true);
    } else {
      this.$.label.innerText = val;
      this.set('hasFormula', false);
    }
    this.set('selected', false);

    this.dispatchEvent(
      new CustomEvent('vcf-spreadsheet-cell-blurred', {
        bubbles: true,
        composed: true,
        detail: {
          col: this.col,
          row: this.row,
          value: this.value
        }
      })
    );
  }

  _labelKeyUp(ev) {
    // Control key code: 17
    // Cmd key code: 91
    switch (ev.keyCode) {
      case 17:
      case 91:
        this.set('_ctrlDown', false);
    }
  }

  _labelKeyDown(ev) {
    // Arrow keys codes: LURD 37, 38, 39 40
    // Control key code: 17
    // Cmd key code: 91
    // V key: 86
    // Enter: 13
    switch (ev.keyCode) {
      case 13:
        ev.preventDefault();
        this.dispatchEvent(
          new CustomEvent('vcf-spreadsheet-cell-key-return', {
            bubbles: true,
            composed: true,
            detail: {
              col: this.col,
              row: this.row,
              ctrlDown: this._ctrlDown
            }
          })
        );
        return;
      case 37:
        if (this._ctrlDown) {
          this.dispatchEvent(
            new CustomEvent('vcf-spreadsheet-cell-key-left', {
              bubbles: true,
              composed: true,
              detail: {
                col: this.col,
                row: this.row,
                ctrlDown: this._ctrlDown
              }
            })
          );
        }
        return;
      case 38:
        this.dispatchEvent(
          new CustomEvent('vcf-spreadsheet-cell-key-up', {
            bubbles: true,
            composed: true,
            detail: {
              col: this.col,
              row: this.row,
              ctrlDown: this._ctrlDown
            }
          })
        );
        return;
      case 39:
        if (this._ctrlDown) {
          this.dispatchEvent(
            new CustomEvent('vcf-spreadsheet-cell-key-right', {
              bubbles: true,
              composed: true,
              detail: {
                col: this.col,
                row: this.row,
                ctrlDown: this._ctrlDown
              }
            })
          );
        }
        return;
      case 40:
        this.dispatchEvent(
          new CustomEvent('vcf-spreadsheet-cell-key-down', {
            bubbles: true,
            composed: true,
            detail: {
              col: this.col,
              row: this.row,
              ctrlDown: this._ctrlDown
            }
          })
        );
        return;
      case 86:
        if (this._ctrlDown) {
          ev.preventDefault();
          this.dispatchEvent(
            new CustomEvent('vcf-spreadsheet-cell-paste', {
              bubbles: true,
              composed: true,
              detail: {
                col: this.col,
                row: this.row
              }
            })
          );
        }
        return;
      case 17:
      case 91:
        this.set('_ctrlDown', true);
        return;
    }
  }
}

customElements.define(VcfSpreadsheetCell.is, VcfSpreadsheetCell);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfSpreadsheetCell = VcfSpreadsheetCell;
