export class Update {
  // environment: string;
  detailsTrackerId: number;
  status: string;
  dataJson: string;
  responseMsg: string;
  serviceConsumerKey: string;

  transactionRawJson: string;
  event: string;

  constructor(
    detailsTrackerId: number,
    status: string,
    dataJson: string = "",
    event: string,
    responseMsg: string = "",
    serviceConsumerKey: string = "",

    transactionRawJson: string = ""
  ) {
    // this.environment = environment;
    this.detailsTrackerId = detailsTrackerId;
    this.status = status;
    this.dataJson = dataJson;
    this.event = event;

    this.responseMsg = responseMsg;
    this.serviceConsumerKey = serviceConsumerKey;

    this.transactionRawJson = transactionRawJson;
  }
}
