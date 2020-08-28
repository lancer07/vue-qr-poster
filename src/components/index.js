import Vue from "vue";
import Poster from "./Poster.vue";

const Components = {
    Poster
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;