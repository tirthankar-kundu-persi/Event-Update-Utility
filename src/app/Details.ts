export class Details {
  trackerId: Number;
  status: string;
  dataJson: string;
  responseMessage: string;
  eventGroupId: number;
  constructor(
    trackid,
    status,
    dataJson: string = "",
    responseMessage: string = "",
    eventGroupId: number = 0
  ) {
    this.trackerId = trackid;
    this.status = status;
    this.dataJson = dataJson;
    this.responseMessage = responseMessage;
    this.eventGroupId = eventGroupId;
  }
}
