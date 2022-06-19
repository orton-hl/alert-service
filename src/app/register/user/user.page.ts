import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { APIServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  newUserForm: FormGroup = null;
  showRegistredModal: Boolean = false;
  registered: Boolean;

  constructor(
    private fb: FormBuilder,
    private apiService: APIServiceService,
    public loadingController: LoadingController,
    private router: Router,
    public modalController: ModalController
  ) {
    this.newUserForm = this.fb.group({
      username: [, [Validators.required]],
      firstname: [, [Validators.required]],
      lastname: [, [Validators.required]],
      email: [, [Validators.required]],
      password: [, [Validators.required]],
      phoneNumber: [, [Validators.required]],
      passwordConfrim: [, [Validators.required]],
      addressLine1: [, [Validators.required]],
      addressLine2: ['', []],
      addressLine3: ['', []],
      postalCode: [, [Validators.required]],
    });
  }

  ngOnInit() {}

  async registerUser() {
    console.log(this.newUserForm.value);
    let payload = this.generatePayload();
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present();

    return this.apiService
      .registerUser(payload)
      .toPromise()
      .then((data) => {
        loading.dismiss();
        this.showRegistredModal = true;
        this.registered = true;
      })
      .catch(() => {
        this.showRegistredModal = true;
        this.registered = false;
      });
  }

  generatePayload(): User {
    return {
      username: this.newUserForm.get('username').value,
      address: `${this.newUserForm.get('addressLine1').value} \n  ${
        this.newUserForm.get('addressLine2').value
      }  \n ${this.newUserForm.get('addressLine3').value}`,
      email: this.newUserForm.get('email').value,
      firstname: this.newUserForm.get('firstname').value,
      isActive: true,
      lastname: this.newUserForm.get('lastname').value,
      password: this.newUserForm.get('password').value,
      phoneNumber: this.newUserForm.get('phoneNumber').value,
      postalCode: this.newUserForm.get('postalCode').value,
    };
  }

  closeRegistration() {
    this.showRegistredModal = false;
    setTimeout(() => {
      this.router.navigate(['/sign-in']);
    }, 500);
  }

}
