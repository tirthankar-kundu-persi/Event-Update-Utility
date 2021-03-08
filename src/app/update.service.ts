import { Injectable } from "@angular/core";
import { Update } from "./update/update";
import {Details} from "./Details";
@Injectable({
  providedIn: "root",
})
export class UpdateService {
  entry: Update[] = [];
  json:Details[]=[]
 
  constructor() {}
  add(env, track, status) {
    this.entry.push(new Update(env, track, status));
    this.json.push(new Details(track,status));
  }
  get():Update[]{
   
    return this.entry;
  }
  getjson(): {} {
    return JSON.stringify(this.json);
  }



}
