import router from "./router/index.js";
import { createApp } from "vue";
import App from "./App.vue";
// import vuetify from "./plugins/vuetify";

createApp(App).use(router).mount("#app");
