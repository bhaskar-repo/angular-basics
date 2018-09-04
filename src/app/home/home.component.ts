import { Component, OnInit } from '@angular/core';
import { IcefireHttpService } from '../icefire-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allDetails: any = [];
  public allCategories = ["All","Books","Characters","Houses"];
  public category = "All";
  public searchText: string;

  constructor(private icefireHttpService: IcefireHttpService, private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this.getAllDetails();
  }

  //This method combines all the categories returned by the service.
  public getAllDetails(): any {
    this.icefireHttpService.getAllBooks().subscribe(
      data => {
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
      },
      error => {
        console.log(error.errorMessage);
      }
    )

    this.icefireHttpService.getAllCharacters().subscribe(
      data => {
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
      },
      error => {
        console.log(error.errorMessage);
      }
    )

    this.icefireHttpService.getAllHouses().subscribe(
      data => {
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

  //This will be called on drop down and selected category data is shown.
  public onChange(): any {
    if("All" == this.category){
      this.getAllDetails();
    }
    else if("Books" == this.category){
      this.icefireHttpService.getAllBooks().subscribe(
      data => {
        this.allDetails = data;
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
      },
      error => {
        console.log(error.errorMessage);
      }
    )
    }
    else if("Characters" == this.category){
      this.icefireHttpService.getAllCharacters().subscribe(
      data => {
        this.allDetails = data;
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
      },
      error => {
        console.log(error.errorMessage);
      }
    )
    }
    else{
      this.icefireHttpService.getAllHouses().subscribe(
      data => {
        this.allDetails = data;
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
      },
      error => {
        console.log(error.errorMessage);
      }
    )
    }
  }

  //Navigates to view page on click of div.
  public displayFullView(url: string): any {
    let arraySplited: string[] = url.split("/");
    let viewParam = arraySplited[arraySplited.length - 2];
    let viewId = arraySplited[arraySplited.length - 1];
    this._router.navigate(['/view',viewParam,viewId]);
  }
}
