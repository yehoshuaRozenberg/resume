import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  public isActive:boolean = false;

  public toggleMenu():void{
    this.isActive = !this.isActive;
  }
}
