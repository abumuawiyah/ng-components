import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { HeaderComponent as Header } from "projects/atomic-component/src/public-api";

export default {
  title: "Header",
  component: Header,
};

export const FullWidth = () => ({
  component: Header,
  props: {},
});
