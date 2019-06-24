import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  people: Array<any> = [];

  constructor(private navCtrl: NavController, private authService: AuthService) {
  }

  ngOnInit() {
  }

}