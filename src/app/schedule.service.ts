import { Injectable } from "@angular/core";
import { Schedule } from "./schedule/schedull";
import { Details } from "./Details";
@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  entry: Schedule[] = [];

  constructor() {}
  add(tracking) {
    this.entry.push(new Schedule(tracking));
  }
  // get(): Schedule[] {
  //   return this.entry;
  // }

  getjson(): {} {
    return JSON.stringify(this.entry);
  }
}
