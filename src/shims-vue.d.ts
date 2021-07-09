declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module 'vue-cleave-component' {
  import Cleave from 'vue-cleave-component'
  export default Cleave
}

declare module "*.svg" {
  const value: string;
  export default value;
}
