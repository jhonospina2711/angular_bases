import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id:   uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id:   uuid(),
    name: 'Goku',
    power: 9000,
  },{
    id:   uuid(),
    name: 'Vegueta',
    power: 7500
  }];

  addCharacter( character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character}
    //Push inserta un elemento al final del arreglo characters[]
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter( indice: number ) {
  //onDeleteCharacter( indice: number ) {
  deleteCharacterById( id:string) {
    this.characters = this.characters.filter(  character => character.id != id);
  }

}
