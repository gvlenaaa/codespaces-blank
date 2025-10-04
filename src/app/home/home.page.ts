import { Component } from '@angular/core';

interface Item {
  name: string,
  class: string,
  cost: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  my_name:string = "Хадыженское- лучшее пиво!"
  my_list:string[] = ["Ляляляляляляляляля", "окакокакокакокак", "оаоаоаоаоао"]
  my_Items: Item[] = [
    {name: "Vkusno i grustno", class: 'Pivo', cost: 5600},
    {name: "Hochu kushat", class: 'Pizza', cost: 3000},
    {name: "Ne pridumala", class: 'Chto-to', cost: 92387498}
  ]

  constructor() {}

}
