export class Details {
  trackerId: Number;
  status: string;
  dataJson: string;
  responseMessage: string;
  groupId: number;
  constructor(
    trackid,
    status,
    dataJson: string = "",
    responseMessage: string = "",
    groupId: number = 0
  ) {
    this.trackerId = trackid;
    this.status = status;
    this.dataJson = dataJson;
    this.responseMessage = responseMessage;
    this.groupId = groupId;
  }
}
