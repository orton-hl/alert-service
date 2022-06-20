import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Alert } from 'src/app/models/alert.model';
import { APIServiceService } from 'src/app/services/api-service.service';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  showAlert = false;
  sendAlertModal = false;

  panicPaylload = {
    fire: true,
    animal: false,
    medical: true,
    description: '',
  };

  selectedAlert: Alert = undefined;

  alerts: Alert[] = [];

  constructor(
    private apiService: APIServiceService,
    private stateService: StateServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    try {
      this.apiService
      .getAllAlerts(this.stateService.userData.account.id)
      .subscribe( data => {
        this.alerts = data
      });
    } catch (error) {
      this.router.navigate([''])
    }
  }

  toggleModal(alert: Alert) {
    this.selectedAlert = alert;
    this.showAlert = !this.showAlert;
  }

  sendAlert() {
    this.apiService
      .postAlert(this.genratePayload())
      .toPromise()
      .then((data) => {
        this.sendAlertModal = !this.sendAlertModal;
        console.log(data);
      })
      .catch((err) => {
        this.sendAlertModal = !this.sendAlertModal;
        console.log(err);
      });
  }

  determineEmergencyType(): string {
    let type = '';
    type += this.panicPaylload.animal ? '1' : '0';
    type += this.panicPaylload.medical ? '1' : '0';
    type += this.panicPaylload.fire ? '1' : '0';
    return type;
  }

  genratePayload(): Alert {
    let payload: Alert = {
      description: this.panicPaylload.description,
      isActive: true,
      isResolved: false,
      timeStamp: new Date().getTime().toString(),
      userId: this.stateService.userData.account.id,
      emergencyType: this.determineEmergencyType(),
    };
    return payload;
  }

  toggleSendModal() {
    this.sendAlertModal = !this.sendAlertModal;
    this.loadData();
  }

  resolveAlert(alert: Alert) {
    this.apiService.resolveAlert(alert).toPromise()
      .then(() => {this.loadData()})
      .catch(() => {this.loadData()})
  }
}
