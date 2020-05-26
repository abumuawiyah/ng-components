import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { GithubButtonComponent as GithubButton } from "projects/atomic-component/src/public-api";

export default {
  title: "Github Button",
  component: GithubButton,
};

export const FullWidth = () => ({
  component: GithubButton,
  props: {},
});
