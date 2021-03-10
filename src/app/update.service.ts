import { Injectable } from "@angular/core";
import { Update } from "./update/update";
import { Details } from "./Details";
import { Update1 } from "./update/update1";
import { Update2 } from "./update/update2";
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
  jsonDev2:Update1[]=[]
  jsonQa2:Update1[]=[]
  jsonUat2:Update1[]=[]
  jsonProd2:Update1[]=[]
  jsonDev3:Update2[]=[]
  jsonQa3:Update2[]=[]
  jsonUat3:Update2[]=[]
  jsonProd3:Update2[]=[]

  trackArr=[]
  trackArr1=[]
  trackArr2=[]
  result;
  enviroment;
  

  constructor() {}
  withoutDataJsonUED(environment,trackerId,status,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId)
 {

  this.jsonDev3=[]
  this.jsonQa3=[]
  this.jsonUat3=[]
  this.jsonProd3=[]

    this.enviroment=environment;
    this.trackArr2= trackerId.split(",");
    console.log(this.trackArr2)
    for(let i=0;i<this.trackArr2.length;i++)
    {

    if(environment=="DEV")
    {
      this.jsonDev3.push(new Update2(Number(this.trackArr2[i]),status,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
    }
    else if(environment=="QA")
    {
      this.jsonQa3.push(new Update2(Number(this.trackArr2[i]),status,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));

    }
    else if(environment=="UAT")
    {
      this.jsonUat3.push(new Update2(Number(this.trackArr2[i]),status,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));


    }
    else if(environment=="PROD")
   {
    this.jsonProd3.push(new Update2(Number(this.trackArr2[i]),status,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
   }


  }





 }







  withoutDatajson(environment,trackerId,status,responseMsg,groupId)
  {
   this.jsonDev2=[]
  this.jsonQa2=[]
  this.jsonUat2=[]
  this.jsonProd2=[]

    this.enviroment=environment;
    this.trackArr2= trackerId.split(",");
    console.log(this.trackArr2)
    for(let i=0;i<this.trackArr2.length;i++)
    {

    if(environment=="DEV")
    {
     this.jsonDev2.push(new Update1(Number(this.trackArr2[i]),status,responseMsg,groupId));
    }
    else if(environment=="QA")
    {
     this.jsonQa2.push(new Update1(Number(this.trackArr2[i]),status,responseMsg,groupId));

    }
    else if(environment=="UAT")
    {
     this.jsonUat2.push(new Update1(Number(this.trackArr2[i]),status,responseMsg,groupId));


    }
    else if(environment=="PROD")
   {
     this.jsonProd2.push(new Update1(Number(this.trackArr2[i]),status,responseMsg,groupId));
   }


  }

  
    


  }
  addUpdateEventDetails(environment,trackerId,status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId)
  {

    this.jsonDev1=[]
    this.jsonQa1=[]
    this.jsonUat1=[]
    this.jsonProd1=[]

    this.enviroment=environment;
    this.trackArr1= trackerId.split(",");
    console.log(this.trackArr1)
    for(let i=0;i<this.trackArr1.length;i++)
    {
      if(environment=="DEV")
     {
  
     this.jsonDev1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
     }
     else if(environment=="QA")
     {
      this.jsonQa1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));

     }
     else if(environment=="UAT")
     {
      this.jsonUat1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
 
 
     }
     else if(environment=="PROD")
    {
      this.jsonProd1.push(new Update(Number(this.trackArr1[i]),status,dataJson,responseMsg,serviceConsumerKey,conformationId,transactionRawJson,eventGroupId));
    }
   }   
     1


  }


  add(env, track, status, data, response, group)
   {
    this.jsonDev=[]
    this.jsonQa=[]
    this.jsonUat=[]
    this.jsonProd=[]
    
    this.enviroment=env;
    console.log(typeof track)
    this.trackArr= track.split(",");
    console.log(this.trackArr)
    for(let i=0;i<this.trackArr.length;i++)
    {
      if(env=="DEV")
     {
      this.jsonDev.push(new Details(Number(this.trackArr[i]),status,data,response,group));
     }
     else if(env=="QA")
     {
      this.jsonQa.push(new Details(Number(this.trackArr[i]),status,data,response,group));

     }
     else if(env=="UAT")
     {
      this.jsonUat.push(new Details(Number(this.trackArr[i]),status,data,response,group));
 
 
     }
     else if(env=="PROD")
    {
      this.jsonProd.push(new Details(Number(this.trackArr[i]),status,data,response,group));
    }   
     


    
    }
     

    // this.entry.push(new Update(env, track, status));

  }

 
  getjson(): {} 
  {
    
    if(this.enviroment=="DEV")
    {
     this.result= this.jsonDev    
    } 
    else if(this.enviroment=="QA")
    {
      this.result= this.jsonQa 
    
    } 
    else if(this.enviroment=="UAT")
    {
      this.result= this.jsonUat 

    } 
    else if(this.enviroment=="PROD")
    {
      this.result=this.jsonProd
    } 
    console.log(this.result)
    return JSON.stringify(this.result,null,4);
  }

  getjsonupdateeventdetails(): {} 
  {
    
    if(this.enviroment=="DEV")
    {
     this.result= this.jsonDev1    
    } 
    else if(this.enviroment=="QA")
    {
      this.result= this.jsonQa1 
    
    } 
    else if(this.enviroment=="UAT")
    {
      this.result= this.jsonUat1 

    } 
    else if(this.enviroment=="PROD")
    {
      this.result=this.jsonProd1
    }
    console.log("result") 
    console.log(this.result)
    return JSON.stringify(this.result,null,4);
  }
  getwithoutDatajson():{}
  {

    if(this.enviroment=="DEV")
    {
     this.result= this.jsonDev2    
    } 
    else if(this.enviroment=="QA")
    {
      this.result= this.jsonQa2
    
    } 
    else if(this.enviroment=="UAT")
    {
      this.result= this.jsonUat2 

    } 
    else if(this.enviroment=="PROD")
    {
      this.result=this.jsonProd2
    }
    console.log("result") 
    console.log(this.result)
    return JSON.stringify(this.result,null,4);


  }
  withoutDataJsongetUED():{}
  {
    if(this.enviroment=="DEV")
    {
     this.result= this.jsonDev3    
    } 
    else if(this.enviroment=="QA")
    {
      this.result= this.jsonQa3
    
    } 
    else if(this.enviroment=="UAT")
    {
      this.result= this.jsonUat3 

    } 
    else if(this.enviroment=="PROD")
    {
      this.result=this.jsonProd3
    }
    console.log("result") 
    console.log(this.result)
    return JSON.stringify(this.result,null,4);





  }



}
