import type { Preview } from "@storybook/react";

import i18n from './i18next';

import "semantic-ui-css/semantic.min.css";
import "../src/grams.css";

const preview: Preview = {
  globals: {
      locale: 'en',
      locales: {
          en: 'English',
          ar: 'عربي'
      },
  },
  parameters: {
    i18n,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
          method: 'alphabetical',
          order: ['Grams UI', ['Introduction', 'Components'], '*'],
          locales: 'en-US',
      }
    }
  }
};

export default preview;
