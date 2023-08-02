import type { Preview } from "@storybook/react";
import i18n from './i18next';

import "semantic-ui-css/semantic.min.css";
import "../src/index.css";

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
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
