import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent {

  constructor(private router: Router) { }

  ionViewDidEnter() {
    this.router.navigate(['/list']);
  }

}
