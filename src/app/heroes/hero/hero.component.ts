import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'iroman';
  public age:number = 45;

  get capitalizedName():string{
      return this.name.toLocaleUpperCase();
  }

  public getHeroDescription():string{
    
    return `${this.name} - ${this.age}`;

  }

  changeHero():void{

    this.name="Juan Solar";

  }

  changeAge():void{

    this.age=40;

  }

  resetForm():void{
    this.name="iroman";
    this.age=45;
  }


}
