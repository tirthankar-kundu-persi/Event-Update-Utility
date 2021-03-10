import { Injectable } from "@angular/core";
import { Update } from "./update/update";
import { Details } from "./Details";
@Injectable({
  providedIn: "root",
})
export class UpdateService {
  entry: Update[] = [];



  json1:Details[]=[]
  json2:Update[]=[]
  jsonDev:Details[]=[]
  jsonQa:Details[]=[]
  jsonUat:Details[]=[]
  jsonProd:Details[]=[]
  jsonDev1:Update[]=[]
  jsonQa1:Update[]=[]
  jsonUat1:Update[]=[]
  jsonProd1:Update[]=[]
  trackArr=[]
  trackArr1=[]
  result;
  enviroment;


  constructor() {}
  addUpdateEventDetails(environment,trackerId,status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId)
  {

    this.enviroment=environment;
    this.trackArr1= trackerId.split(",");
    console.log(this.trackArr1)
    for(let i=0;i<this.trackArr1.length;i++)
    {
      if(environment=="Dev")
     {
  
     this.jsonDev1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
     }
     else if(environment=="qa")
     {
      this.jsonQa1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));

     }
     else if(environment=="uat")
     {
      this.jsonUat1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
 
 
     }
     else if(environment=="prod")
    {
      this.jsonProd1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
    }
   }   
     1


  }

  add(env, track, status, data, response, group)
   {
    this.enviroment=env;
    console.log(typeof track)
    this.trackArr= track.split(",");
    console.log(this.trackArr)
    for(let i=0;i<this.trackArr.length;i++)
    {
      if(env=="Dev")
     {
      this.jsonDev.push(new Details(Number(this.trackArr[i]),status,data,response,group));
     }
     else if(env=="qa")
     {
      this.jsonQa.push(new Details(Number(this.trackArr[i]),status,data,response,group));

     }
     else if(env=="uat")
     {
      this.jsonUat.push(new Details(Number(this.trackArr[i]),status,data,response,group));
 
 
     }
     else if(env=="prod")
    {
      this.jsonProd.push(new Details(Number(this.trackArr[i]),status,data,response,group));
    }   
     


    
    }
     

    // this.entry.push(new Update(env, track, status));

  }

 
  getjson(): {} 
  {
    
    if(this.enviroment=="Dev")
    {
     this.result= this.jsonDev    
    } 
    else if(this.enviroment=="qa")
    {
      this.result= this.jsonQa 
    
    } 
    else if(this.enviroment=="uat")
    {
      this.result= this.jsonUat 

    } 
    else if(this.enviroment=="prod")
    {
      this.result=this.jsonProd
    } 
    console.log(this.result)
    return JSON.stringify(this.result,null,4);
  }
  getjsonupdateeventdetails(): {} 
  {
    
    if(this.enviroment=="Dev")
    {
     this.result= this.jsonDev1    
    } 
    else if(this.enviroment=="qa")
    {
      this.result= this.jsonQa1 
    
    } 
    else if(this.enviroment=="uat")
    {
      this.result= this.jsonUat1 

    } 
    else if(this.enviroment=="prod")
    {
      this.result=this.jsonProd1
    } 
    console.log(this.result)
    return JSON.stringify(this.result,null,4);
  }


}
