import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Client } from 'src/app/models/client.model';
import { APIServiceService } from 'src/app/services/api-service.service';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  clientForm: FormGroup = null;
  showRegistredModal: Boolean = false;
  registered: Boolean;
  key : string =  ''

  constructor(
    private fb: FormBuilder,
    private apiService: APIServiceService,
    public loadingController: LoadingController,
    private router: Router,
    public modalController: ModalController,
    private stateService : StateServiceService
  ) {
    this.clientForm = this.fb.group({
      name: [, [Validators.required]],
      password: [, [Validators.required]],
      addressLine1: [, [Validators.required]],
      addressLine2: ['', []],
      addressLine3: ['', []],
      postalCode: [, [Validators.required]],
    });
  }

  ngOnInit() {}

  async registerClient() {
    let payload = this.generatePayload();
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present();

    this.apiService
      .registerClient(payload)
      .toPromise()
      .then((data) => {

        this.key = data.key

        console.log(data)

        loading.dismiss();
        this.showRegistredModal = true;
        this.registered = true;
      })
      .catch(() => {
        loading.dismiss();
        this.showRegistredModal = true;
        this.registered = false;
      });
  }

  generatePayload(): Client {
    return {
      name : this.clientForm.get('name').value,
      address: `${this.clientForm.get('addressLine1').value} \n  ${
        this.clientForm.get('addressLine2').value
      }  \n ${this.clientForm.get('addressLine3').value}`,
      isActive: true,
      postalCode: this.clientForm.get('postalCode').value,
    };
  }

  closeRegistration() {
    this.showRegistredModal = false;
    setTimeout(() => {
      this.router.navigate(['/sign-in']);
    }, 500);
  }
}
