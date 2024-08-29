import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

    constructor( private dbzServide:DbzService){
        
    }

    get characters():Character[]{

        return [...this.dbzServide.characters]; // Me devuelve una copia de la data

    }

    onDeleteCharacter(id:string):void{
        this.dbzServide.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void{
        this.dbzServide.addCharacter(character);
    }

}