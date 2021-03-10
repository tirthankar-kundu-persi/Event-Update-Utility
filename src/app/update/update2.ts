export class Update2 {
    // environment: string;
    detailsTrackerId:number;
    status: string;
    // dataJson:string;
    responseMsg:string;
    serviceConsumerKey:string;
    conformationId:string;
    transactionRawJson:string;
    eventGroupId:number;
  
  
    constructor(detailsTrackerId:number, status: string,responseMsg:string="",serviceConsumerKey:string="",conformationId:string="",transactionRawJson:string="",eventGroupId:number=0) {
      // this.environment = environment;
      this.detailsTrackerId = detailsTrackerId;
      this.status = status;
    //   this.dataJson=dataJson;
      this.responseMsg=responseMsg;
      this.serviceConsumerKey=serviceConsumerKey;
      this.conformationId=conformationId
      this.transactionRawJson=transactionRawJson;
      this.eventGroupId=eventGroupId;
    }
  
  }
  
  
  