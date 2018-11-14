import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        console.log(params['id']);
      });

    this.route.queryParams
      .subscribe((qParams) => {
        console.log(qParams);
      });
  }

  navigateToCart() {
    this.router.navigate(['cart']);

  }

}
