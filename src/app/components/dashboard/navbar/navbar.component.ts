import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  rol!: string;
  id!: number;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentRol.subscribe(rol => this.rol = rol);
    this.sharedService.currentId.subscribe(id => this.id = id);
  }
}
