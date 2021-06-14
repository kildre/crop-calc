import Vue from "vue";
import VueInputAutowidth from "vue-input-autowidth";
import VueCurrencyInput from "vue-currency-input";

const pluginOptions = {
  /* see config reference */
  globalOptions: { currency: "USD" }
};
Vue.use(
  VueInputAutowidth,
  VueCurrencyInput,
  {
    globalOptions: {
      currency: "USD"
    }
    // componentName: "NumberInput"
  },
  pluginOptions
);
