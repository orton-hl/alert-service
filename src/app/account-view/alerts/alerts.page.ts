import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Alert } from 'src/app/models/alert.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  showAlert = false;
  sendAlertModal = true;

  panicPaylload = {
    fire : true,
    animal: false,
    medical: true,
    description : ""
  }

  selectedAlert: Alert = undefined;

  alerts: Alert[] = [
    {
      id: 'string',
      userId: 'string',
      clientId: 'string',
      emergencyType: 3,
      description: 'string    vfdvfver regergregege rger ege vfegv erg erge',
      isResolved: false,
      isActive: false,
      timeStamp: 'string',
    },
    {
      id: 'string',
      userId: 'string',
      clientId: 'string',
      emergencyType: 3,
      description: 'string',
      isResolved: true,
      isActive: false,
      timeStamp: 'string',
    },
    {
      id: 'string',
      userId: 'string',
      clientId: 'string',
      emergencyType: 3,
      description: 'string',
      isResolved: true,
      isActive: false,
      timeStamp: 'string',
    },
  ];

  constructor() {}

  ngOnInit() {
    // this.selectedAlert = this.alerts[0];
  }

  toggleModal(alert: Alert) {
    this.selectedAlert = alert;
    this.showAlert = !this.showAlert;
  }

  sendAlert(){
    this.sendAlertModal = !this.sendAlertModal
    console.log(this.panicPaylload)

  }

  toggleSendModal(){
    this.sendAlertModal = !this.sendAlertModal
  }

  resolveAlert(alert : Alert){
    console.log(alert)
  }
}
