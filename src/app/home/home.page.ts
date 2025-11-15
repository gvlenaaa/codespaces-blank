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
  constructor() {}
  my_name: string = "Рестораны";
  my_list: string[] = ["Гастрономия", "Качество", "Вкус"];
  my_Items: Item[] = [
    { name: "Барвиха", class: 'Киевская 2', cost: 5600 },
    { name: "Аист", class: 'Арбатская 8', cost: 3000 },
    { name: "Хачапури и вино", class: 'Тверская 23', cost: 92387498 }
  ];
  input_one: string = "Название"
  input_two: string = "Адрес"
  input_three: number = 0

  addExclamationMark(): void {
    this.my_name += "!" 
    this.my_Items.push({ name: this.input_one, class: this.input_two, cost: this.input_three })

  }
}