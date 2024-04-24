import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentRol.subscribe(rol => console.log(rol));
    this.sharedService.currentId.subscribe(id => console.log(id));
  }
}
