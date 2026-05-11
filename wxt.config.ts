import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Browser Extension Starter',
    short_name: 'Starter',
    permissions: ['storage'],
    browser_specific_settings: {
      gecko: {
        data_collection_permissions: {
          required: ['none'],
        },
      },
    },
  },
});
