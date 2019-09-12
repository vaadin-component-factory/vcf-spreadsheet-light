# &lt;vcf-spreadsheet-light&gt;

[&lt;vcf-spreadsheet-light&gt;](https://vaadin.com/components/component-factory) is a Web Component providing an easy way to ask the user to confirm a choice, part of the [Vaadin components](https://vaadin.com/components).

[<img src="https://raw.githubusercontent.com/vaadin/vcf-spreadsheet-light/master/screenshot.png" width="200" alt="Screenshot of vcf-spreadsheet-light">](https://vaadin.com/components/component-factory)

## Example Usage

```html
  <vcf-spreadsheet-light header="Unsaved changes" confirm-text="Save" on-confirm="save"
    cancel on-cancel="cancel" reject reject-text="Discard" on-reject="discard">
    Do you want to save or discard your changes before navigating away?
  </vcf-spreadsheet-light>
```
