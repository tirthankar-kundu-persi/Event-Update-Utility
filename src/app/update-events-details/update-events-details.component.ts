import { Component, OnInit } from "@angular/core";
import { UpdateService } from "../update.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-update-events-details",
  templateUrl: "./update-events-details.component.html",
  styleUrls: ["./update-events-details.component.css"],
})
export class UpdateEventsDetailsComponent implements OnInit {
  environment = "";
  trackerId;
  status = "";
  table = false;
  entries;
  details = {};
  json;
  dataJson;
  responseMsg;
  serviceConsumerKey;
  conformationId;
  transactionRawJson;
  event;
  trackerArray = [];
  result;
  add = false;
  hideResponse = false;
  hidedataJson = false;
  hideserviceConsumerKey = false;
  hideconformationId = false;
  hidetransactionRawJson = false;
  hideeventGroupId = false;
  constructor(private service: UpdateService) {}

  ngOnInit(): void {}

  onAdd(env, id, status) {
    this.environment = env;
    this.trackerId = id;
    this.status = status.toUpperCase();

    // if (this.eventGroupId == "") this.eventGroupId = 0;

    if (!this.hidedataJson) {
      this.service.withoutDataJsonUED(
        this.environment,
        this.trackerId,
        this.status,
        this.event,
        this.responseMsg,
        this.serviceConsumerKey,

        this.transactionRawJson
      );
      this.json = this.service.withoutDataJsongetUED();
    } else {
      if (String(this.dataJson).length > 0) {
        this.service.addUpdateEventDetails(
          this.environment,
          this.trackerId,
          this.status,
          this.dataJson,
          this.event,
          this.responseMsg,
          this.serviceConsumerKey,

          this.transactionRawJson
        );
        this.json = this.service.getjsonupdateeventdetails();
      } else {
        this.service.withoutDataJsonUED(
          this.environment,
          this.trackerId,
          this.status,
          this.event,

          this.responseMsg,
          this.serviceConsumerKey,

          this.transactionRawJson
        );
        this.json = this.service.withoutDataJsongetUED();
      }
    }

    // this.service.addUpdateEventDetails(
    //   this.environment,
    //   this.trackerId,
    //   this.status,
    //   this.dataJson,
    //   this.responseMsg,
    //   this.serviceConsumerKey,
    //   this.conformationId,
    //   this.transactionRawJson,
    //   this.eventGroupId
    // );

    console.log(this.json);
    this.dataJson = "";
    this.responseMsg = "";
    this.serviceConsumerKey = "";
    this.conformationId = "";
    this.event = "";
    this.transactionRawJson = "";

    this.hideResponse = false;
    this.hidedataJson = false;
    this.hideserviceConsumerKey = false;
    this.hideconformationId = false;
    this.hidetransactionRawJson = false;
    this.hideeventGroupId = false;
  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
  }

  onAddMore() {
    this.hidedataJson = true;
    this.hideResponse = true;
    this.hideserviceConsumerKey = true;
    this.hideconformationId = true;
    this.hidetransactionRawJson = true;
    this.hideeventGroupId = true;
  }

  clear(form2) {
    form2.reset();
  }

  hide_data() {
    this.hidedataJson = false;
    this.dataJson = "";
  }
  hide_res() {
    this.hideResponse = false;
    this.responseMsg = "";
  }

  hide_serviceConsumerKey() {
    this.hideserviceConsumerKey = false;
    this.serviceConsumerKey = "";
  }
  hide_conformationId() {
    this.hideconformationId = false;
    this.conformationId = "";
  }
  hide_transactionRawJson() {
    this.hidetransactionRawJson = false;
    this.transactionRawJson = "";
  }
  hide_eventGroupId() {
    this.hideeventGroupId = false;
    this.event = "";
  }
}
