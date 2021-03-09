import { Component, OnInit } from "@angular/core";
import { UpdateService } from "../update.service";
import { environment } from "../../environments/environment.prod";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent implements OnInit {
  environment = "";
  trackerId;
  status = "";

  json;
  entries;
  dataJson;
  responseMsg;
  groupId;
  add = false;
  hideGroup = false;
  hideResponse = false;
  hideData = false;

  constructor(private service: UpdateService) {}

  ngOnInit(): void {}
  onAdd(env, id, status) {
    // console.log(env, id, status);
    // console.log(typeof id);
    this.environment = env;
    this.trackerId = Number(id);
    this.status = status;
    // this.table = true;

    this.service.add(
      this.environment,
      this.trackerId,
      this.status,
      this.dataJson,
      this.responseMsg,
      this.groupId
    );

    this.entries = this.service.get();
    this.json = this.service.getjson();
    // this.add = false;
    this.hideGroup = false;
    this.hideResponse = false;
    this.hideData = false;
  }
  onAddMore() {
    // this.add = true;
    this.hideGroup = true;
    this.hideResponse = true;
    this.hideData = true;
  }
  clear(form1) {
    form1.reset();
  }
  hide_data() {
    // this.add = false;
    // this.hideGroup = false;
    // this.hideResponse = false;
    this.hideData = false;
    this.dataJson = "";
  }
  hide_res() {
    // this.add = false;
    // this.hideGroup = false;
    this.hideResponse = false;
    this.responseMsg = "";
    // this.hideData = false;
  }
  hide_group() {
    // group.reset();
    // console.log(group.value);
    // this.add = false;
    this.groupId = 0;

    this.hideGroup = false;

    // this.hideResponse = false;
    // this.hideData = false;
  }
}
