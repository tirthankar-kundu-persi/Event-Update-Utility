import { Injectable } from "@angular/core";
import { Update } from "./update/update";
import { Details } from "./Details";
@Injectable({
  providedIn: "root",
})
export class UpdateService {
  entry: Update[] = [];
  json: Details[] = [];

  constructor() {}

  add(env, track, status, data, response, group) {
    this.entry.push(new Update(env, track, status));
    this.json.push(new Details(track, status, data, response, group));
  }

  get(): Update[] {
    return this.entry;
  }
  getjson(): {} {
    return JSON.stringify(this.json);
  }
}
