import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Welcome to Chirpus Pizza';

  MenuItems: MenuItem[] = [
    {
      name: "Chicken Fingers",
      category: "Dinner",
      price: 11.99,
      vegetarian: false,
      soldOut: false
    },
    {    
      name: "Pizza",
      category: "Dinner",
      price: 11.99,
      vegetarian: true,
      soldOut: false
    },
    {    
      name: "Pepperoni Pizza",
      category: "Dinner",
      price: 12.99,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Bread Sticks",
      category: "Sides",
      price: 4.99,
      vegetarian: true,
      soldOut: true
    },
    {    
      name: "Wings",
      category: "Sides",
      price: 8.99,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Cinnamon Roll",
      category: "Dessert",
      price: 8.99,
      vegetarian: true,
      soldOut: false
    }
  ];
}
