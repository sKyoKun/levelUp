import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public registerForm = new FormGroup({
    username        : new FormControl ('', [Validators.required]),
    email           : new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
    password        : new FormControl('', [Validators.required, Validators.minLength(5)]),
    passwordConfirm : new FormControl('', [Validators.required, Validators.minLength(5)]),
    enable          : new FormControl(false, [Validators.required]),
    money           : new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    level           : new FormControl(1, [Validators.required, Validators.pattern("^[0-9]*$")])
  });

  constructor(private userService: UsersService) { }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get passwordConfirm(): AbstractControl {
    return this.registerForm.get('passwordConfirm');
  }

  get money(): AbstractControl {
    return this.registerForm.get('money');
  }

  get level(): AbstractControl {
    return this.registerForm.get('level');
  }

  ngOnInit(): void {
  }


  public submit() {
    let submittedData = this.registerForm.getRawValue();

    delete submittedData.password;
    delete submittedData.passwordConfirm;

    submittedData.xp = 0;

    this.userService.register(submittedData);
  }

}
