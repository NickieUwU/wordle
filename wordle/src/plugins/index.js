/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import wordle from './wordle'

export function registerPlugins (app) {
  app.use(vuetify);
  app.use(wordle);
}
