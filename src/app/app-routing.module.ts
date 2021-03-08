import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { UpdateComponent } from "./update/update.component";
import { UpdateEventsDetailsComponent } from "./update-events-details/update-events-details.component";
var routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "schedule",
    component: ScheduleComponent,
  },
  {
    path: "update",
    component: UpdateComponent,
  },

  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "updateeventsdetails",
    component: UpdateEventsDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
