import { Component, OnInit } from "@angular/core";
import { UpdateService } from "../update.service";

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
    this.environment = env;
    this.trackerId = id;
    this.status = status.toUpperCase();

    if (this.groupId == "") this.groupId = 0;
    if (!this.dataJson) 
    {

      this.service.withoutDataJson(
        this.environment,
        this.trackerId,
        this.status,
        this.responseMsg,
        this.groupId
      );

      this.json = this.service.getjson();
    }
    else
    {

      if (String(this.dataJson).length > 0) 
      {
      
        this.service.add(
          this.environment,
          this.trackerId,
          this.status,
          this.dataJson,
          this.responseMsg,
          this.groupId
        );
        this.json = this.service.getjson();
      } 
      else 
      {
        this.service.withoutDataJson(
          this.environment,
          this.trackerId,
          this.status,
          this.responseMsg,
          this.groupId
        );
        
        this.json = this.service.getjson();
      }






    }

  



   
    // this.json = this.service.getjson();

    this.dataJson = "";
    this.responseMsg = "";
    this.groupId = "";
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
    this.hideData = false;
    this.dataJson = "";
  }
  hide_res() {
    this.hideResponse = false;
    this.responseMsg = "";
  }
  hide_group() {
    this.groupId = "";

    this.hideGroup = false;
  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
  }
}
