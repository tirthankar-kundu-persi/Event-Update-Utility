import { Injectable } from "@angular/core";
import { Update } from "./update/update";
import { Details } from "./Details";
@Injectable({
  providedIn: "root",
})
export class UpdateService {
  entry: Update[] = [];



  json:Details[]=[]
  jsonDev:Details[]=[]
  jsonQa:Details[]=[]
  jsonUat:Details[]=[]
  jsonProd:Details[]=[]
  trackArr=[]
  result;
  enviroment;


  constructor() {}

  add(env, track, status, data, response, group) {
    this.entry.push(new Update(env, track, status));

  }

  get(): Update[] {
    this.trackArr= track.split(",");
    console.log(this.trackArr)
    this.enviroment=env;
    
    for(let i=0;i<this.trackArr.length;i++)
    {
      if(env=="Dev")
     {
      this.jsonDev.push(new Details(Number(this.trackArr[i]),status));
     }
     else if(env=="qa")
     {
      this.jsonQa.push(new Details(Number(this.trackArr[i]),status));

     }
     else if(env=="uat")
     {
      this.jsonUat.push(new Details(Number(this.trackArr[i]),status));
 
 
     }
     else if(env=="prod")
    {
      this.jsonProd.push(new Details(Number(this.trackArr[i]),status));
    }   
     


    
    }
    // this.json.push(new Details(track,status));
  }

  get():Update[]{
  
    return this.entry;
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
       
    
    return JSON.stringify(this.result,null,4);
  }
}
