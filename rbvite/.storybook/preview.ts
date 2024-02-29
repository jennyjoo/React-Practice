import type { Preview } from '@storybook/react';
import '../src/index.css';

// tailwind 는 node-modules에 설치되어 있고 global css 에 import 되어있음

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
