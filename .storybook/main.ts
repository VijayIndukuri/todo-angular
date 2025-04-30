/**
 * This file is not being used.
 * The actual Storybook configuration is in main.js.
 * This file is kept for reference only.
 */

// The configuration below is for reference only
import type { StorybookConfig } from '@storybook/angular';

/**
 * Note: This type definition provides type checking for the configuration.
 * The actual runtime configuration used by Storybook is in main.js
 */
const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: true
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  staticDirs: ["../src/assets"],
  typescript: {
    check: false
  },
  core: {
    disableTelemetry: true
  }
};

export default config;