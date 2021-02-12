import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthService } from "./../../../services/auth.service";
import { SnackbarService } from "./../../../services/snackbar.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private snackbarService : SnackbarService
  ) {}

  ngOnInit() {
    this.loading = false;
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.loading = true;
      this.authenticationService
        .login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate(["/dashboard"]);
          },
          (error) => {
          this.loading = false;
          this.snackbarService.openSnackBar(error);
          }
        );
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
