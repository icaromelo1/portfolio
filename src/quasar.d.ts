/* eslint-disable */
// Types for Quasar components

import { QuasarPluginOptions } from 'quasar';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $q: import('quasar').QVueGlobals;
  }
}
