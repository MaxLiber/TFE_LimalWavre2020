import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthenticatedUserModel } from '../model/authenticated-user.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { jetonValidator } from './validators/change-password-validators';
import { Router } from '@angular/router';
import { ToastMessageService } from '../../../common/services/toast-message.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  preLoginuser: AuthenticatedUserModel = null;

  error: string=null;
  changePasswordForm: FormGroup;
  passwordsForm: FormGroup;

  password: string=null;
  passwordStrength=0;
  jeton: string=null;

  isProd=true;

  // validation
  static passwordMatch(form: FormGroup)
  {
      const password=form.get('password').value;
      const passwordcopy=form.get('password2').value;
      return password!==passwordcopy ? { matchingError: true} : null;
  }
  /*
  static jetonMatch(form: FormGroup)
  {
      const formJeton=form.get('jeton').value;
      //const emailcopy=form.get('f3EmailCopy').value;
      return formJeton!==this.jeton ? { matchingError: true} : null;
  }
  */

 
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastMessageService: ToastMessageService,
  ) { }

  ngOnInit(): void 
  {
    this.isProd=environment.production;
    
    this.preLoginuser=this.authService.getPreLoginUser();
    this.jeton=this.preLoginuser.changePasswordJeton;

    this.passwordsForm=this.formBuilder.group(
      {
        password: new FormControl('', { validators: [Validators.required] }),
        password2: new FormControl('', { validators: [Validators.required] }),
      }
      ,
      {
          validator: ChangePasswordComponent.passwordMatch
      }
    );
    this.changePasswordForm = new FormGroup({
      passwordsForm: this.passwordsForm,
      jeton: new FormControl('', { validators: [Validators.required, jetonValidator(this.jeton)] })
    });
  }

  onChangePassword()
  {
    this.password=this.passwordsForm.value.password;
  }

  onSubmit()
  {
    this.authService.changePassword(this.preLoginuser.username, this.password, this.jeton)
      .subscribe( user => {
        this.toastMessageService.addSuccess('Login', 'Bonjour '+user.prenom);
        this.router.navigate(['default']);
        this.postLogin(user);
      });
  }

  postLogin( user: AuthenticatedUserModel)
  {
    this.authService.postProcessLogin(user);
  }

  onPasswordStrengthChanged(event)
  { 
    // console.warn('password strength:', event);
    this.passwordStrength=event;
  }
}
