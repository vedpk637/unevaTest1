import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  title="management System"
  patients=[];
  Waiting:number=0;
  Completed:number=0;
  Total;
  constructor(private _dataservice:DataServiceService, private _router:Router) { }
   
  ngOnInit(): void {
    this._dataservice.patientData().subscribe(res=>{console.log(res);
      this.patients=res;
      this.patients.forEach(element => {
        return this.patients.sort((a, b) => {
          return <any>new Number(a.tokenName) - <any>new Number(b.tokenName);

        }) ;
        
      });
      this.patients.forEach(element => {
        if(element.status === 0){
          this.Waiting = this.Waiting+1
        }
        else{
          this.Completed = this.Completed+1
        }
         this.Total=this.Completed + this.Waiting;
        
      });
    });
      
    
  }

  onClick(obj:number){
    this._router.navigate(['/details',obj]);
  }

}
