import { MatSnackBar } from "@angular/material";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.openSnackBarWithAction(message, 'Close');
  }

  openSnackBarWithAction(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }
}
