import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[]=['Spiderman','Iroman','Hulk','Thor','JCST'];
  public deleteHero?:string; // Variable con Scope Global

  removeLastHero():void{
    // const deleteHero = this.heroNames.pop(); // Variable con el scope local
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
    
  }

}
