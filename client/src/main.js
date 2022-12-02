import { createApp } from 'vue'
// import '../index.css'

//Import Pinia
import {createPinia} from 'pinia';
//Import Pinia Persist State
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

//Import i18n Internalization
import i18n from './includes/i18n'; 

//Import Router
import router from './router';
//Import Plugin -> Validation
import validationPlugin from './plugins/validations';
//Import Directives
import FontSize from './directives/FontSize';
import App from './App.vue'

const app = createApp(App);

//Using Internalization For Language Switching
app.use(i18n);
const pinia = createPinia();
//Using Pinia Persist State
pinia.use(piniaPluginPersistedstate);
//Using Pinia In Project
app.use(pinia);
//Use Validtion In Project
app.use(validationPlugin);
//Using Router In Project
app.use(router);
//Using Direcives -> FontSize
app.directive('font-size',FontSize);

app.mount('#app')
