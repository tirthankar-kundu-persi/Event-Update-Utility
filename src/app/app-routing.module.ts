import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { UpdateComponent } from "./update/update.component";
import { UpdateEventsDetailsComponent } from "./update-events-details/update-events-details.component";
var routes = [
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "schedule",
    component: ScheduleComponent,
    pathMatch: "full",
  },
  {
    path: "update",
    component: UpdateComponent,
    pathMatch: "full",
  },

  {
    path: "updateeventsdetails",
    component: UpdateEventsDetailsComponent,
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "home",
    // component: HomeComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
