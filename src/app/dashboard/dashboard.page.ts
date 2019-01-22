import { Component, OnInit } from '@angular/core';
import { ScannerPage } from '../scanner/scanner.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {

  }

  goToScanner() {
    this.navCtrl.navigate['/dashboard'];
  }
}
