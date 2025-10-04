import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  my_name:string = "Хадыженское- лучшее пиво!"
  my_list:string[] = ["Ляляляляляляляляля", "окакокакокакокак", "оаоаоаоаоао"]

  constructor() {}

}
