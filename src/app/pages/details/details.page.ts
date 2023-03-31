import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  path = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const urlPath = this.route.snapshot.paramMap.get('path');
    this.path = urlPath.split('/');
  }

}
