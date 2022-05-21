const path = require("path");
const pathSrc = path.resolve(__dirname, "..", "./src");
const vueJsx = require("@vitejs/plugin-vue-jsx");

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@": pathSrc,
        },
      },
      plugins: [...config.plugins, vueJsx()],
      esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment",
      },
    };
  },
};
