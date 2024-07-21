import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Sipiderman', 'Iroman', 'She Hulk', 'Thor' ];

  public deleteHero?: string;
  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();

  }
}
