import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyService } from '../dummy.service';
import { ProductitemComponent } from '../productitem/productitem.component';

@Component({
  selector: 'app-productlist',
  standalone: true, // standalone = true
  imports: [CommonModule, ProductitemComponent], // หากต้องการใช้ component หรือ module เพิ่มเติม add ตรงนี้
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent {
  constructor(readonly dummyService: DummyService) {}
  

}
