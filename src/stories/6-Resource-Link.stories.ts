import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { ResourceLinkComponent as ResourceLink } from "projects/atomic-component/src/public-api";

export default {
  title: "Resource Link",
  component: ResourceLink,
};

export const FullWidth = () => ({
  component: ResourceLink,
  props: {},
});
