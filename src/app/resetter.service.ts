import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, merge, concat, throwError, Subject, Subscription, BehaviorSubject, AsyncSubject } from "rxjs";
import { map, mergeMap, tap, catchError } from "rxjs/operators";

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetterService {
  private apiUrl = environment.apiUrl; 

  constructor(
    private http: HttpClient
  ) { }

  public genToken(uid: string): Observable<any> {
    return this.http.post(this.apiUrl, { uid: uid });
  }

  public resetPassword(uid: string, token: string): Observable<any> {
    return this.http.post(this.apiUrl, { uid: uid, token: token });
  }
}
