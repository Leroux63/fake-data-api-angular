import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private internalToken$: BehaviorSubject<string| undefined> = new BehaviorSubject<string | undefined>(undefined)

  token$: Observable<string | undefined> = this.internalToken$.asObservable()

  private baseUrlApi: string = environment.API_URL

  private resourceName: string = 'auth'

  private fullBaseUrlApi: string

  constructor(private http: HttpClient) {
    this.fullBaseUrlApi = this.baseUrlApi + this.resourceName
  }

  get token(): string | undefined{
    return this.internalToken$.value
  }
  signIn(username: string, password: string, keepConnection: boolean): Promise<void | string> {
    const obsHttp$ = this.http.post<{ token: string }>(`${this.fullBaseUrlApi}/login`, {username, password})

    return firstValueFrom(obsHttp$) // renvoie une promesse
      .then((res: { token: string })=>{
        this.internalToken$.next(res.token)
        console.log(this.internalToken$)
      })
  }

  signOut(){
    this.internalToken$.next(undefined)
  }
}
