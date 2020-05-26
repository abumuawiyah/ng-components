import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { RocketBadgeComponent as RocketBadge } from "projects/atomic-component/src/public-api";

export default {
  title: "Rocket Button",
  component: RocketBadge,
};

export const FullWidth = () => ({
  component: RocketBadge,
  props: {},
});
