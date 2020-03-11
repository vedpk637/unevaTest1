import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _dataservice:DataServiceService, private _activatedRoute:ActivatedRoute) { }
   
  patientDetails;
  patientID;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(res=>{console.log(res);
    this.patientID = res.id;
    this._dataservice.patientDetails(res.id).subscribe(data=>{
    this.patientDetails=data
    });
    })

   }

}
