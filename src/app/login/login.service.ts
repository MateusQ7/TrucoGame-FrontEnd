import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormatedForm } from '../models/formatedForm';
import { BackReponse } from '../register/backResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
    ) { }

    submit(formData: FormatedForm): Observable<BackReponse>{
      return this.http.post<BackReponse>(`${this.config.apiUrl}/login`, formData);
    }
}
