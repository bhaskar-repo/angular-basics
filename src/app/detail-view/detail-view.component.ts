import { Component, OnInit } from '@angular/core';
import { IcefireHttpService } from '../icefire-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  public detail;

  constructor(private _route: ActivatedRoute, private icefireHttpService: IcefireHttpService) { }

  ngOnInit() {
    let viewParam = this._route.snapshot.paramMap.get('viewParam');
    let viewId = this._route.snapshot.paramMap.get('viewId');
    //returns the details about Book,Character or House
    this.detail = this.icefireHttpService.getDetailsByParamId(viewParam,viewId).subscribe(
      data => {
        this.detail = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

}
