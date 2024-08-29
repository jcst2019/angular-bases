import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name:'Trunks',
    power:10
  }];

  @Output()
  // public onDelete:EventEmitter<number>= new EventEmitter();
  public onDelete:EventEmitter<string>= new EventEmitter();

  // onDeleteCharacter(index:number):void{
  onDeleteCharacter(id:string):void{
    //Emitir el Id del personaje
    // console.log(index);
    if(!id) return;
    // console.log(id);
    // this.onDelete.emit(index);
    this.onDelete.emit(id);
    
  }

}
