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

  constructor(private service: UpdateService) {}

  ngOnInit(): void {}
  onAdd(env, id, status) {
    this.environment = env;
    this.trackerId = Number(id);
    this.status = status;
    this.table = true;

    // this.service.add(this.environment, this.trackerId, this.status);
    this.entries = this.service.get();
    this.json = this.service.getjson();
  }
}
