const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": true
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  "staticDirs": ["../src/assets"],
  "typescript": {
    "check": false,
    "reactDocgen": false
  },
  "core": {
    "disableTelemetry": true
  },
  "webpackFinal": async (config) => {
    // Add postcss-loader for Tailwind CSS
    const cssRule = config.module.rules.find(
      rule => rule.test && rule.test.toString().includes('.css')
    );
    
    if (cssRule && cssRule.use) {
      // Create a new use array with postcss-loader
      const loaders = Array.isArray(cssRule.use) ? cssRule.use : [cssRule.use];
      
      // Add postcss-loader if not already present
      if (!loaders.some(loader => 
        typeof loader === 'object' && 
        loader.loader && 
        loader.loader.includes('postcss-loader')
      )) {
        loaders.push({
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                'tailwindcss',
                'autoprefixer',
              ],
            },
          },
        });
        
        cssRule.use = loaders;
      }
    }
    
    return config;
  }
}; 