import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  
  prodId: number | undefined;

  productDetails: any;

  constructor(private activatedRoute: ActivatedRoute , private http:HttpClient) {}

  ngOnInit(): void {
    
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe((param) => {
      this.prodId = +param['id'];

    });

    this.http.get(`https://dummyjson.com/products/${this.prodId}`).subscribe((res=>{
      this.productDetails=res;

    }))
  }
}
