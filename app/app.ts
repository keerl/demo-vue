import Vue from 'nativescript-vue'
import Menu from './components/Menu.vue'

import { install } from './components/linked-components/install';
install();

new Vue({
  render: (h) => h('frame', [h(Menu)]),
}).$start()
