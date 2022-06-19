import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { APIServiceService } from '../services/api-service.service';
import { StateServiceService } from '../services/state-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signinForm: FormGroup;

  constructor(
    private stateService : StateServiceService,
    public loadingController: LoadingController,
    private router: Router,
    private apiService: APIServiceService,
    private fb: FormBuilder
  ) {
    this.signinForm = this.fb.group({
      username: [, Validators.required],
      password: [, Validators.required],
    });
  }

  ngOnInit() {}

  async signIn() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present();

    this.apiService
      .siginIn(this.signinForm.value)
      .toPromise()
      .then( data => {
        loading.dismiss();

        this.stateService.setUser(data)

        this.router.navigate(['account-view']);
      })
      .catch(() => {
        loading.dismiss();
      });
  }
}
