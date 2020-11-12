import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public connectionForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)])
  });


  constructor(private userService: UsersService) { }

  get email(): AbstractControl {
    return this.connectionForm.get('email');
  }

  get password(): AbstractControl {
    return this.connectionForm.get('password');
  }

  ngOnInit(): void {
  }

  public submit() {
    const data = this.connectionForm.getRawValue();
    this.userService.login(data);
  }

}
