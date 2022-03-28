import { Component } from '@angular/core';
import { CallApiService } from './call-api.service';
declare var toggle:any;
declare var toggle2:any;
declare var toggle3:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX';
  res1:any=[]
  year=""
  landlaunch=false
  landsucces=false
  constructor(private callapi:CallApiService){

  }

  /* Get Year */
  getYear=(btn:string)=>{
       this.year=btn
  }

  /* Get Land Launch */
  getLandLaunch=(launch:boolean)=>{
    this.landlaunch=launch
  }
  
  /* Get Land Succes */
 getLandSuccess=(success:boolean)=>{
    this.landsucces=success
    this.Filter(this.year,this.landlaunch,this.landsucces)
  }
  
  Filter(year:string,LandLaunch:boolean,LandSuccess:boolean){
     
     if(!LandLaunch && LandSuccess){
      console.log(year,LandLaunch,LandSuccess)
           this.callapi.getApiLandLaunch(LandSuccess).subscribe(res=>{
                 this.res1=res
                 console.log(this.res1['land_success'])
           })

     }

     else if(year!='2014' && (LandLaunch && LandSuccess)){
      console.log(year,LandLaunch,LandSuccess)
      this.callapi.getApiLandLaunchLandSuccess(LandLaunch,LandSuccess).subscribe(res=>{
            this.res1=res
            console.log(this.res1)
      })
    }
    else if(year=='2014' && (LandLaunch && LandSuccess)){
      console.log(year,LandLaunch,LandSuccess)
        this.callapi.getApiLandLaunchLandSuccessWithYear(year,LandLaunch,LandSuccess).subscribe(res=>{
          this.res1=res
          console.log(this.res1['land_success'])
        })  
      }
     
}
  ngOnInit(){
     new toggle()
     new toggle2()
     new toggle3()
     this.callapi.getApi().subscribe(
       res=>{
         this.res1=res
         console.log(this.res1)
       }
     )
     
  }
}
