import '@vaadin/vaadin-lumo-styles/color';
import '@vaadin/vaadin-lumo-styles/sizing';
import '@vaadin/vaadin-lumo-styles/spacing';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-grid',
  css`
    thead [part='row'] th,
    thead [part='row'] td,
    tbody [part='row'] td {
      min-height: auto !important;
      height: var(--lumo-size-xs) !important;
    }

    thead [part='row'] th {
      background-color: #fafafa;
      border-right: solid 1px #eaeaea;
    }

    [part='row'] td[first-column] {
      background-color: #fafafa;
      border-right: var(--_lumo-grid-secondary-border-color) 1px solid;
      padding: auto;
    }

    [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      padding: 0 !important;
      height: 100%;
    }
  `
);
