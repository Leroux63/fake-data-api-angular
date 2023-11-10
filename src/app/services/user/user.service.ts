import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User, UserHttp} from "../../models/user.model";
import {firstValueFrom, map} from "rxjs";
import mapperUserHttpToUser = User.mapperUserHttpToUser;
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users?: User[]

  private baseUrlApi: string = environment.API_URL

  private resourceName: string = 'users'

  private fullBaseUrlApi: string


  constructor(private http: HttpClient, private authService: AuthService) {
    this.fullBaseUrlApi = this.baseUrlApi + this.resourceName
  }

  getAll(): Promise<User[]> {
    const token = this.authService.token as string
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    const options = {headers}
    const obsHttp$ = this.http
      .get<UserHttp[]>(`${this.fullBaseUrlApi}/`,options)
      .pipe(
        map((usersHttp : UserHttp[])=>usersHttp.map((userHttp: UserHttp)=> User.mapperUserHttpToUser(userHttp)))
      )

    return firstValueFrom(obsHttp$)
  }

}
