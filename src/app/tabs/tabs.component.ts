import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  constructor(private router: Router) {}
  ngOnInit() {}

  getRoute(val: any) {
    this.router.navigate([val]);
  }
}
