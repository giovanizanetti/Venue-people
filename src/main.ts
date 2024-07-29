import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/plugins/pinia'
import i18n from '@/plugins/i18n'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import { plugin, defaultConfig } from '@formkit/vue'
import { TooltipDirective } from '@/directives/v-tooltip'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';


const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)
app.use(plugin, defaultConfig)
app.directive('tooltip', TooltipDirective)
app.use(ToastPlugin);

app.mount('#app')
