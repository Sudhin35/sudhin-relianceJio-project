import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient, public route: Router) {}

  getLanguages(country) {
    return this.http.get<any>(`${environment.apiUrl}/languages/` + country);
  }
}
