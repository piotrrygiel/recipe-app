import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  collapsed = true;
  @Output() menuItemClicked = new EventEmitter<string>();

  onRecipesClick() {
    this.menuItemClicked.emit("recipe")
  }

  onShoppingListClick() {
    this.menuItemClicked.emit("shopping-list")
  }
}
