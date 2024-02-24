import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  choice = "recipe";

  onMenuItemClicked(choice: string) {
    this.choice = choice;
  }
}
