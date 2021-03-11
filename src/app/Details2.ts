export class Details2 {
    trackerId: Number;
    status: string;
    responseMessage: string;
    eventGroupId: number;
    constructor(
      trackid,
      status,
      responseMessage: string = "",
      eventGroupId: number = 0
    ) {
      this.trackerId = trackid;
      this.status = status;
      this.responseMessage = responseMessage;
      this.eventGroupId = eventGroupId;
    }
  }
  