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
  table = false;
  json;
  entries;
  constructor(private service: UpdateService) {}

  ngOnInit(): void {}
  onAdd(env, id, status) {
    // console.log(env, id, status);
    // console.log(typeof id);
    this.environment = env;
    this.trackerId = Number(id);
    this.status = status;
    this.table = true;

    this.service.add(this.environment, this.trackerId, this.status);
    this.entries = this.service.get();
    this.json = this.service.getjson();
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  

}
