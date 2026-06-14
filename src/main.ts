import { createApp } from "vue";
import App from "./App.vue";
import TresJS from "@tresjs/core";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(TresJS);
app.mount("#app");
