import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AtomicComponentModule } from "../../../atomic-component/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AtomicComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
