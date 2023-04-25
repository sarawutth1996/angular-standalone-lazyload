import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DummyService } from '../dummy.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  product!: Observable<any>;

  constructor(
    private dummyService: DummyService,
    private route: ActivatedRoute
  ) {}

  getDetail(data: any):string{
    return JSON.stringify(data)
    
  }
  

  ngOnInit(): void {
    this.product = this.route.paramMap.pipe(
      map((param) => {
        return this.dummyService.data[Number(param.get('index'))];
      })
    );


    
  }
}


