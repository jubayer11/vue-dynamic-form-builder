import { createElementBlock as a, openBlock as n, normalizeClass as e, createElementVNode as c } from "vue";
const i = {
  __name: "iconMinus",
  props: {
    icon: {
      type: String,
      default: "icon__default__icon"
    },
    path: {
      type: Array,
      default: ["icon__default__icon__path1", "icon__default__icon__path2"]
    }
  },
  setup(t) {
    return (o, _) => (n(), a("svg", {
      class: e([t.icon]),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "#000000"
    }, [
      c("path", {
        class: e([t.path[0]]),
        d: "M19 13H5v-2h14v2z"
      }, null, 2)
    ], 2));
  }
};
export {
  i as default
};
