import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
	iconfont: ['md', 'mdi']
})

export default new Vuetify({
});
