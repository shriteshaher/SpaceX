import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http:HttpClient) { }

  getApi(){
    return this.http.get("https://api.spacexdata.com/v3/launches?limit=100")
  }

  getApiLandLaunch(landLaunch:boolean){
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${landLaunch}`)
   
  }

  getApiLandLaunchLandSuccess(landLaunch:boolean,landsucces:boolean){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${landsucces}&land_success=${landLaunch}`)
  }

  getApiLandLaunchLandSuccessWithYear(year:string,landlaunch:boolean,landsuccess:boolean){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${landlaunch}&land_success=${landsuccess}&launch_year=2014`)
  }
}
