import { Welcome } from "@storybook/angular/demo";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import {
  GithubButtonComponent,
  HeaderComponent,
  FooterComponent,
  ResourceLinkComponent,
  RocketBadgeComponent,
  CircleLinkComponent,
  StepButtonComponent,
} from "../../projects/atomic-component/src/public-api";

export default {
  title: "Welcome",
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        GithubButtonComponent,
        HeaderComponent,
        FooterComponent,
        ResourceLinkComponent,
        RocketBadgeComponent,
        CircleLinkComponent,
        StepButtonComponent,
        FooterComponent,
      ],
      imports: [CommonModule],
    }),
  ],
};

export const ToStorybook = () => ({
  template: `
    <section>
      <h2>Main Header</h2>
      <ui-header></ui-header>
      <h2>Github button</h2>
      <div class="github-button-container">
        <ui-github-button></ui-github-button>
      </div>
      <h2>Resource Link</h2>
      <div class="resource-link-container">
        <ui-resource-link></ui-resource-link>
      </div>
      <h2>Circle Link</h2>
      <ui-circle-link></ui-circle-link>
      <h2>Step Button</h2>
      <div class="step-button-container">
        <ui-step-button></ui-step-button>
      </div>
      <h2>Rocket Badge</h2>
      <div class="rocket-badge-container">
        <br />
        <ui-rocket-badge></ui-rocket-badge>
        <br />
      </div>
      <h2>Footer</h2>
      <ui-footer></ui-footer>
    </section>
  `,
  styles: [
    `
    .resource-link-container {
      width: 234px;
    }

    .circle-link-container {
      width: 202px;
    }

    .step-button-container {
      width: 202px;
    }

    .rocket-badge-container {
      width: 290px;
    }

    .github-button-container {
      width: 68px;
    }
  `,
  ],
  props: {},
});

ToStorybook.story = {
  name: "to Storybook",
};
