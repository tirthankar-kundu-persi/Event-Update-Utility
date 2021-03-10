import { Component, OnInit } from "@angular/core";

import { ScheduleService } from "../schedule.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"],
})
export class ScheduleComponent implements OnInit {
  constructor(private service: ScheduleService) {}
  table = false;
  environment = "";
  trackerId;

  entries;

  ngOnInit(): void {}
  onAdd(env, id) {
    console.log(env, id);
    this.environment = env;
    this.trackerId = id.split(",");
    this.trackerId.forEach((t, i) => {
      // this.trackingNew[i] = Number(t);
      // console.log(t);
      this.trackerId[i] = Number(t);
    });
    // console.log(this.trackingNew);
    // console.log(this.tracking);
    this.table = true;
    this.service.add(this.trackerId);
    this.entries = this.service.getjson();
  }
  clear(form1) {
    form1.reset();
  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
  }
}
