import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
})
export class ProductitemComponent {
  @Input() item!: any;
  @Input() index!: number;

  constructor(){
    
  }
}
