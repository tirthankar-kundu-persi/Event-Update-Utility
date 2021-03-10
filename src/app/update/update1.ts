export class Update1 {
    trackerId:number;
    status: string;
    responseMsg:string;
    groupId:number;
    
  
  
    constructor(trackerId:number,status:string="",responseMsg:string="",groupId:number=0) {

      this.trackerId = trackerId;
      this.status = status;
      this.responseMsg=responseMsg;
      this.groupId=groupId;
    }
  
  }
  
  
  