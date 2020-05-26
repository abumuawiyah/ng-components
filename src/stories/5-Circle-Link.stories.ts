import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { CircleLinkComponent as CircleLink } from "projects/atomic-component/src/public-api";

export default {
  title: "Circle Link",
  component: CircleLink,
};

export const Default = () => ({
  component: CircleLink,
  props: {},
});
