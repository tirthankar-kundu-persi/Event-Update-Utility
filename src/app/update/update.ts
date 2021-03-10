export class Update {
  // environment: string;
  trackerId:number;
  status: string;
  dataJson:string;
  responseMsg:string;
  serviceConsumerKey:string;
  conformationId:string;
  transactionRawJson:string;
  eventGroupId:number;


  constructor(trackerId:number, status: string,dataJson:string="",responseMsg:string="",serviceConsumerKey:string="",conformationId:string="",transactionRawJson:string="",eventGroupId:number=0) {
    // this.environment = environment;
    this.trackerId = trackerId;
    this.status = status;
    this.dataJson=dataJson;
    this.responseMsg=responseMsg;
    this.serviceConsumerKey=serviceConsumerKey;
    this.conformationId=conformationId
    this.transactionRawJson=transactionRawJson;
    this.eventGroupId=eventGroupId;
  }

}


