import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormatedForm } from '../models/formatedForm';
import { Observable } from 'rxjs';
import { BackReponse } from './backResponse.interface';
import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
    ) { }

  submit(formData: FormatedForm): Observable<BackReponse>{
    return this.http.post<BackReponse>(`${this.config.apiUrl}/user`, formData);
  }
}
