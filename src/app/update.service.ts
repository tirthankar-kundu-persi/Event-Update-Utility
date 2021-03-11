import { Injectable } from "@angular/core";
import { Update } from "./update/update";
import { Details } from "./Details";
import {Details2} from "./Details2";
import { Update2 } from "./update/update2";
@Injectable({
  providedIn: "root",
})
export class UpdateService {
  entry: Update[] = [];

  jsonDev= [];
  jsonQa= [];
  jsonUat= [];
  jsonProd= [];
  

  jsonDev4= [];
  jsonQa4= [];
  jsonUat4= [];
  jsonProd4= [];



  trackArr = [];
  trackArr1 = [];
  trackArr2 = [];
  result;
  enviroment;

constructor() {}

withoutDataJsonUED(
    environment,
    trackerId,
    status,
    event,
    responseMsg,
    serviceConsumerKey,
    transactionRawJson
    ) {
   let flag=0;
    this.enviroment = environment;
    this.trackArr2 = trackerId.split(",");
    console.log(this.trackArr2);
    for (let i = 0; i < this.trackArr2.length; i++) 
    {

      if (environment == "DEV") 
      {

       for(let j=0;j<this.jsonDev4.length;j++)
       {
           if(this.jsonDev4[j].detailsTrackerId==Number(this.trackArr2[i]))
           {
             this.jsonDev4[j]=new Update2(
              Number(this.trackArr2[i]),
              status,
              responseMsg,
              event,
              serviceConsumerKey,
              transactionRawJson
            )
            flag=1
             break;

           }
        

       }
        if(flag==0)
        {
        this.jsonDev4.push(
          new Update2(
            Number(this.trackArr2[i]),
            status,
            responseMsg,
            event,
            serviceConsumerKey,

            transactionRawJson
          )
        );

        }


      } 
      else if (environment == "QA") 
      {
          
       for(let j=0;j<this.jsonQa4.length;j++)
       {

           if(this.jsonQa4[j].detailsTrackerId==Number(this.trackArr2[i]))
           {
             this.jsonQa4[j]=new Update2(
              Number(this.trackArr2[i]),
              status,
              responseMsg,
              event,
              serviceConsumerKey,
              transactionRawJson
            )
            flag=1
             break;

           }
        

       }
        if(flag==0)
        {

        this.jsonQa4.push(
          new Update2(
            Number(this.trackArr2[i]),
            status,
            responseMsg,
            event,
            serviceConsumerKey,

            transactionRawJson
          )
        );

        }




        
      } else if (environment == "UAT") {
           
          
       for(let j=0;j<this.jsonUat4.length;j++)
       {
           if(this.jsonUat4[j].detailsTrackerId==Number(this.trackArr2[i]))
           {
             this.jsonUat4[j]=new Update2(
              Number(this.trackArr2[i]),
              status,
              responseMsg,
              event,
              serviceConsumerKey,
              transactionRawJson
            )
            flag=1
             break;

           }
        

       }
        if(flag==0)
        {
        this.jsonUat4.push(
          new Update2(
            Number(this.trackArr2[i]),
            status,
            responseMsg,
            event,
            serviceConsumerKey,

            transactionRawJson
          )
        );

        }

      

       
      } else if (environment == "PROD") 
      {
            
       for(let j=0;j<this.jsonProd4.length;j++)
       {
           if(this.jsonProd4[j].detailsTrackerId==Number(this.trackArr2[i]))
           {
             this.jsonProd4[j]=new Update2(
              Number(this.trackArr2[i]),
              status,
              responseMsg,
              event,
              serviceConsumerKey,
              transactionRawJson
            )
            flag=1
             break;

           }
        

       }
        if(flag==0)
        {
        this.jsonProd4.push(
          new Update2(
            Number(this.trackArr2[i]),
            status,
            responseMsg,
            event,
            serviceConsumerKey,

            transactionRawJson
          )
        );

        }


       
      }
    }
  }

  addUpdateEventDetails(
    environment,
    trackerId,
    status,
    dataJson,
    eventGroupId,
    responseMsg,
    serviceConsumerKey,

    transactionRawJson
  ) {

    
   let flag=0;
    this.enviroment = environment;
    this.trackArr1 = trackerId.split(",");
    console.log(this.trackArr1);
    for (let i = 0; i < this.trackArr1.length; i++) {



      if (environment == "DEV") {
     
        for(let j=0;j<this.jsonDev4.length;j++)
        {
            if(this.jsonDev4[j].detailsTrackerId==Number(this.trackArr2[i]))
            {
              this.jsonDev4[j]=new Update(
                  Number(this.trackArr1[i]),
                  status,
                  dataJson,
                  eventGroupId,
                  responseMsg,
                  serviceConsumerKey,
                  transactionRawJson
                )
              
             flag=1
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonDev4.push(
            new Update(
              Number(this.trackArr1[i]),
              status,
              dataJson,
              eventGroupId,
              responseMsg,
              serviceConsumerKey,
  
              transactionRawJson
            )
          );
        
         }

        
       

      } else if (environment == "QA") {
       
        for(let j=0;j<this.jsonQa4.length;j++)
        {
            if(this.jsonQa4[j].detailsTrackerId==Number(this.trackArr2[i]))
            {
              this.jsonQa4[j]=new Update(
                  Number(this.trackArr1[i]),
                  status,
                  dataJson,
                  responseMsg,
                  eventGroupId,
                  serviceConsumerKey,
                  transactionRawJson
                )
              
              
             flag=1
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonQa4.push(
            new Update(
              Number(this.trackArr1[i]),
              status,
              dataJson,
              responseMsg,
              eventGroupId,
              serviceConsumerKey,
  
              transactionRawJson
            )
          );
        
         }

        


      
      } else if (environment == "UAT") {
         
        for(let j=0;j<this.jsonUat4.length;j++)
        {
            if(this.jsonUat4[j].detailsTrackerId==Number(this.trackArr2[i]))
            {
              this.jsonUat4[j]=new Update(
                  Number(this.trackArr1[i]),
                  status,
                  dataJson,
                  responseMsg,
                  eventGroupId,
                  serviceConsumerKey,
      
                  transactionRawJson
                );
              
              
             flag=1
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonUat4.push(
            new Update(
              Number(this.trackArr1[i]),
              status,
              dataJson,
              responseMsg,
              eventGroupId,
              serviceConsumerKey,
              transactionRawJson
            )
          );
        
         }

       
      } else if (environment == "PROD") 
      {
        for(let j=0;j<this.jsonProd4.length;j++)
        {
            if(this.jsonProd4[j].detailsTrackerId==Number(this.trackArr2[i]))
            {
              this.jsonProd4[j]=new Update(
                  Number(this.trackArr1[i]),
                  status,
                  dataJson,
                  responseMsg,
                  eventGroupId,
                  serviceConsumerKey,
      
                  transactionRawJson
                )
              
              
             flag=1
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonProd4.push(
            new Update(
              Number(this.trackArr1[i]),
              status,
              dataJson,
              responseMsg,
              eventGroupId,
              serviceConsumerKey,
  
              transactionRawJson
            )
          );
        
         }
      
      }

    }
    
  }


//update components

  add(env, track, status, data, response, group) {
    
    this.enviroment = env;
    console.log(typeof track);
    this.trackArr = track.split(",");
    console.log(this.trackArr);
    let flag=0;

    for (let i = 0; i < this.trackArr.length; i++) {
      if (env == "DEV") 
      {
        for(let j=0;j<this.jsonDev.length;j++)
        {
            if(this.jsonDev[j].trackerId==Number(this.trackArr[i]))
            {
              this.jsonDev[j]=new Details(Number(this.trackArr[i]), status, data, response, group)
              flag=1;
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonDev.push(new Details(Number(this.trackArr[i]), status, data, response, group));
         
        
         }





       




      } else if (env == "QA") {
       
        for(let j=0;j<this.jsonQa.length;j++)
        {
            if(this.jsonQa[j].trackerId==Number(this.trackArr[i]))
            {
              this.jsonQa[j]=new Details(Number(this.trackArr[i]), status, data, response, group)
              flag=1;
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonQa.push(new Details(Number(this.trackArr[i]), status, data, response, group));
         
        
         }


       
      } else if (env == "UAT") 
      {
           
        for(let j=0;j<this.jsonUat.length;j++)
        {
            if(this.jsonUat[j].trackerId==Number(this.trackArr[i]))
            {
              this.jsonUat[j]=new Details(Number(this.trackArr[i]), status, data, response, group)
              flag=1;
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonUat.push(new Details(Number(this.trackArr[i]), status, data, response, group));
         
        
         }
         






        
      } 
      else if (env == "PROD") 
      {
        for(let j=0;j<this.jsonProd.length;j++)
        {
            if(this.jsonProd[j].trackerId==Number(this.trackArr[i]))
            {
              this.jsonProd[j]= new Details(Number(this.trackArr[i]), status, data, response, group)
              
              flag=1;
              break;
 
            }
         
 
        }
         if(flag==0)
         {
          this.jsonProd.push(new Details(Number(this.trackArr[i]), status, data, response, group));
         
        
         }
         
        


       
      }
    }

    
  }

  withoutDataJson(environment,trackerId,status,response,group)
 {

  this.enviroment = environment;
  this.trackArr = trackerId.split(",");
  console.log(this.trackArr);
  let flag=0;

  for (let i = 0; i < this.trackArr.length; i++) {
    if (environment == "DEV") 
    {
      for(let j=0;j<this.jsonDev.length;j++)
      {
          if(this.jsonDev[j].trackerId==Number(this.trackArr[i]))
          {
            this.jsonDev[j]=new Details2(Number(this.trackArr[i]), status, response, group)
            flag=1;
            break;

          }
       

      }
       if(flag==0)
       {
        this.jsonDev.push(new Details2(Number(this.trackArr[i]), status,response, group));
       
      
       }





     




    } else if (this.enviroment == "QA") {
     
      for(let j=0;j<this.jsonQa.length;j++)
      {
          if(this.jsonQa[j].trackerId==Number(this.trackArr[i]))
          {
            this.jsonQa[j]=new Details2(Number(this.trackArr[i]), status, response, group)
            flag=1;
            break;

          }
       

      }
       if(flag==0)
       {
        this.jsonQa.push(new Details2(Number(this.trackArr[i]), status, response, group));
       
      
       }


     
    } else if (this.enviroment == "UAT") 
    {
         
      for(let j=0;j<this.jsonUat.length;j++)
      {
          if(this.jsonUat[j].trackerId==Number(this.trackArr[i]))
          {
            this.jsonUat[j]=new Details2(Number(this.trackArr[i]), status, response, group)
            flag=1;
            break;

          }
       

      }
       if(flag==0)
       {
        this.jsonUat.push(new Details2(Number(this.trackArr[i]), status, response, group));
       
      
       }
       






      
    } 
    else if (this.enviroment == "PROD") 
    {
      for(let j=0;j<this.jsonProd.length;j++)
      {
          if(this.jsonProd[j].trackerId==Number(this.trackArr[i]))
          {
            this.jsonProd[j]= new Details2(Number(this.trackArr[i]), status,response, group)
            
            flag=1;
            break;

          }
       

      }
       if(flag==0)
       {
        this.jsonProd.push(new Details2(Number(this.trackArr[i]), status, response, group));
       
      
       }
       
      


     
    }
  }
















 }










  getjson(): {}
   {
    if (this.enviroment == "DEV") {
      this.result = this.jsonDev;
    } else if (this.enviroment == "QA") {
      this.result = this.jsonQa;
    } else if (this.enviroment == "UAT") {
      this.result = this.jsonUat;
    } else if (this.enviroment == "PROD") {
      this.result = this.jsonProd;
    }
    console.log("result of update")
    console.log(this.result);
    return JSON.stringify(this.result, null, 4);
  }

  getjsonupdateeventdetails(): {} {
    if (this.enviroment == "DEV") {
      this.result = this.jsonDev4;
    } else if (this.enviroment == "QA") {
      this.result = this.jsonQa4;
    } else if (this.enviroment == "UAT") {
      this.result = this.jsonUat4;
    } else if (this.enviroment == "PROD") {
      this.result = this.jsonProd4;
    }
    console.log("result");
    console.log(this.result);
    return JSON.stringify(this.result, null, 4);
  }

 
}
