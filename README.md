# &lt;vcf-spreadsheet-light&gt;

[Live Demo ↗](https://incubator.app.fi/vcf-spreadsheet-light-demo/)


[&lt;vcf-spreadsheet-light&gt;](https://vaadin.com/directory/component/vaadinvcf-spreadsheet-light) is a Web Component providing basic functionalities of an spreadsheet.

```html
  <vcf-spreadsheet-light col-count="5" height="700px">
  </vcf-spreadsheet-light>
```

[<img src="https://raw.githubusercontent.com/vaadin/vcf-spreadsheet-light/master/screenshot.png" width="200" alt="Screenshot of vcf-spreadsheet-light">](https://vaadin.com/directory/component/vaadin-component-factoryvcf-spreadsheet-light)


## Installation

The Vaadin Component Factory components are distributed as Bower packages.

### Polymer 2 and HTML Imports compatible version

Install `vcf-spreadsheet-light`:

```sh
bower i vaadin/vcf-spreadsheet-light --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/vcf-spreadsheet-light/vcf-spreadsheet-light.html">
```

## Getting Started

Vaadin components use the Lumo theme by default.

## The file structure for Vaadin components

- `src/vcf-spreadsheet-light.html`

  Unstyled component.

- `theme/lumo/vcf-spreadsheet-light.html`

  Component with Lumo theme.

- `vcf-spreadsheet-light.html`

  Alias for theme/lumo/vcf-spreadsheet-light.html


## Running demos and tests in browser

1. Fork the `vcf-spreadsheet-light` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-spreadsheet-light` directory, run `npm install` and then `bower install` to install dependencies.

1. Run `polymer serve --open`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:8080/components/vcf-spreadsheet-light/demo
  - http://127.0.0.1:8080/components/vcf-spreadsheet-light/test


## Running tests from the command line

1. When in the `vcf-spreadsheet-light` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Contributing

  - Make sure your code is compliant with our code linters: `gulp lint`
  - Check that tests are passing: `polymer test`
  - [Submit a pull request](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) with detailed title and description
  - Wait for response from one of Vaadin components team members


## License

Apache License 2.0