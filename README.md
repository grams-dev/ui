# @grams.dev/ui

[![npm version](https://img.shields.io/npm/v/@grams.dev/ui)](https://www.npmjs.com/package/@grams.dev/ui)
[![npm downloads](https://img.shields.io/npm/dm/@grams.dev/ui)](https://www.npmjs.com/package/@grams.dev/ui)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/grams-dev/ui/blob/main/LICENSE)

The `@grams.dev/ui` package is a collection of UI components designed for use with the Grams ecosystem. It provides developers with a set of reusable and customizable UI elements to create user-friendly decentralized applications (dApps).

## Features

- **UI Components**: A library of pre-built UI components tailored for Grams dApps.
- **Theme Customization**: Easily customize the appearance and styling of components to match your dApp's design.
- **Responsive Design**: Components are optimized for various screen sizes and devices, ensuring a seamless user experience.
- **Accessibility**: Prioritizes accessibility standards to ensure that all users can interact with your dApp.
- **Easy Integration**: Simple integration with existing Grams projects or new dApps being built from scratch.

## Installation

You can install the `@grams.dev/ui` package via your preferred package manager.

### npm

```shell
npm install @grams.dev/ui
```

### Yarn

```shell
yarn add @grams.dev/ui
```

## Usage

### Stylesheet

First, you'll need to import the `index.css` CSS file distributed by the package. This should be done at the root of your project (in `index.js` or `App.tsx` of your React app) and will look like:

```tsx
import '@grams.dev/ui/build/index.css';

...
```

### Components

Once installed, you can import and use the UI components in your Grams dApp. Here's an example of how to use a Button component:

```jsx
import React from 'react';
import { Button } from '@grams.dev/ui';

const MyComponent = () => {
  return (
    <Button onClick={() => console.log('Button clicked')}>
      Click Me
    </Button>
  );
};
```

You can customize the appearance and behavior of the UI components using the provided props and CSS styles.

For more detailed information and examples, refer to the [Grams UI Documentation](https://github.com/grams-dev/grams-ui).

### Using Component Library CSS Variables

Above we imported `index.css` into the root of our project. `index.css` contains a number of CSS variables that can be used across the project that consumes our component library.

In your CSS, you can use the variables defined in `variables.css` like:

```CSS
.example-container {
    color: var(--grams-white);
    background-color: var(--grams-black);
}
```

See: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties for more information about CSS Variables.


## Documentation

Comprehensive documentation for @grams.dev/ui is available at [https://storybook.grams.dev](https://storybook.grams.dev). It includes detailed usage instructions, component reference, and examples to help you get started with the package.

## Contributing

Contributions to `@grams.dev/ui` are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/grams-dev/ui).

When contributing, please adhere to the existing code style and guidelines.

## License

The `@grams.dev/ui` package is open source and distributed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). Your contributions to the project are appreciated and will be licensed accordingly.

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run build:storybook
```

This will also copy the CNAME from the root directory to the static files. You can change it to any CNAME you want. 

## Scripts

Grams UI provides several convenient scripts to help with development and maintenance of the library.

### `/create-component`

The `/create-component` script is used to generate a new UI component in the Grams UI library. It automates the process of setting up the component's file structure, boilerplate code, and test files. To use this script, run the following command:

```shell
npm run create:component <ComponentName>
```

Replace `<ComponentName>` with the desired name of your component, using PascalCase. This script will create a new folder in the `src/components` directory with the specified component name, along with the necessary files and directory structure.

### `/create-page`

The `/create-page` script is used to generate a new page component in the Grams UI library. Similar to the `/create-component` script, it sets up the file structure and boilerplate code for a new page component. To use this script, run the following command:

```shell
npm run create:page <PageName>
```

Replace `<PageName>` with the desired name of your page component, using PascalCase. This script will create a new folder in the `src/pages` directory with the specified page name, along with the necessary files and directory structure.

### `/release`

The `/release` script automates the process of releasing a new version of the Grams UI library. It performs various tasks such as version bumping, creating release notes, generating changelogs, and publishing the package to the package registry. To use this script, run the following command:

```shell
npm run release
```

This script will guide you through the release process, prompting for version updates and generating necessary release files. It ensures that the release process is streamlined and follows best practices.

Make sure to review and update the relevant configuration files (such as `package.json` and `CHANGELOG.md`) before running the release script to ensure accurate versioning and documentation.

These scripts provide a convenient way to perform common tasks when developing and maintaining the Grams UI library. Feel free to explore and utilize them as needed for your development workflow.

## Publishing

### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

### Hosting via GitHub

I recommend you host the component library using NPM. However, if you don't want to use NPM, you can use GitHub to host it instead.

You'll need to remove `build/` from `.gitignore`, build the component library (`npm run build`), add, commit and push the contents of `build`. [See this branch for an example.](https://github.com/HarveyD/react-component-library/tree/host-via-github)

You can then install your library into other projects by running:

```
npm i --save git+https://github.com/grams-dev/ui.git#branch-name
```

OR

```
npm i --save github:grams-dev/ui#branch-name
```

## Additional Help

### Dark Mode

The example component `TestComponent` respects the user's dark mode operating system preferences and renders the component in the appropriate theme.

This is achieved by using the media query: `@media (prefers-color-scheme: dark)` in combination with CSS variables. The colours that change depending on dark mode preference can be found in [`src/index.css`](src/index.css). Example usage of these variables can be found within [`src/TestComponent/TestComponent.css`](src/TestComponent/TestComponent.css).

Read https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme for more details.

### Using CSS Preprocessors

The Rollup plugin [`rollup-plugin-postcss`](https://github.com/egoist/rollup-plugin-postcss) supports Sass, Less and Stylus:

- For Sass, install less: `yarn add node-sass --dev`
- For Stylus, install stylus: `yarn add stylus --dev`
- For Less, install less: `yarn add less --dev`

#### CSS Modules

If you want to use CSS Modules, update `postcss` in `rollup-config.js` to:

```
postcss({
  modules: true
})
```

### Component Code Splitting

Code splitting of your components is not supported by default.

[Read this section of my blog post](https://blog.harveydelaney.com/creating-your-own-react-component-library/#introducing-code-splitting-optional-) to find out how and why you would enable code splitting of your components. In summary, code splitting enables users to import components in isolation like:

```
import TestComponent from 'harvey-component-library/build/TestComponent';
```

This can reduce the bundle size for projects using older (CJS) module formats.

You can check out [this branch](https://github.com/HarveyD/react-component-library/tree/code-splitting) or [this commit](https://github.com/HarveyD/react-component-library/commit/94631be5a871f3b39dbc3e9bd3e75a8ae5b3b759) to see what changes are neccesary to implement it.

Please note, there's an issue with code splitting and using `rollup-plugin-postcss`. I recommend using `rollup-plugin-sass` instead alongside code splitting.

Checkout the [official Rollup plugin list](https://github.com/rollup/plugins) for additional helpful plugins.
