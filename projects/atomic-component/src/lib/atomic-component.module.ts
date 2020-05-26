import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GithubButtonComponent } from "./components/github-button/github-button.component";

@NgModule({
  declarations: [GithubButtonComponent],
  imports: [CommonModule],
  exports: [GithubButtonComponent],
})
export class AtomicComponentModule {}
