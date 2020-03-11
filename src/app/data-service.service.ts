import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

 patientData():Observable<any>{
  return this.http.get('https://dev.uneva.in/task_721/list.php')
 }

 patientDetails(id):Observable<any>{
  return this.http.get('http://dev.uneva.in/task_721/patient.php?id='+id)
  }

}
