import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GithubButtonComponent } from "./components/github-button/github-button.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ResourceLinkComponent } from "./components/resource-link/resource-link.component";
import { CircleLinkComponent } from "./components/circle-link/circle-link.component";
import { RocketBadgeComponent } from "./components/rocket-badge/rocket-badge.component";
import { HeaderComponent } from "./components/header/header.component";
import { StepButtonComponent } from "./components/step-button/step-button.component";

@NgModule({
  declarations: [
    GithubButtonComponent,
    FooterComponent,
    HeaderComponent,
    ResourceLinkComponent,
    CircleLinkComponent,
    RocketBadgeComponent,
    StepButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    GithubButtonComponent,
    FooterComponent,
    HeaderComponent,
    ResourceLinkComponent,
    CircleLinkComponent,
    RocketBadgeComponent,
    StepButtonComponent,
  ],
})
export class AtomicComponentModule {}
