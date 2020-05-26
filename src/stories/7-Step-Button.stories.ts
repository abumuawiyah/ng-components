import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { StepButtonComponent as StepButton } from "projects/atomic-component/src/public-api";

export default {
  title: "Step Button",
  component: StepButton,
};

export const FullWidth = () => ({
  component: StepButton,
  props: {},
});
