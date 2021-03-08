import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { UpdateComponent } from "./update/update.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { UpdateEventsDetailsComponent } from './update-events-details/update-events-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    UpdateComponent,
    NavbarComponent,
    HomeComponent,
    UpdateEventsDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
