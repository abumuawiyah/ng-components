import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { FooterComponent as Footer } from "projects/atomic-component/src/public-api";

export default {
  title: "Footer",
  component: Footer,
};

export const FullWidth = () => ({
  component: Footer,
  props: {},
});
