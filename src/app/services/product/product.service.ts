import { Injectable } from '@angular/core';
import {User, UserHttp} from "../../models/user.model";
import {environment} from "../../../environments/environment.development";
import {Product, ProductHttp} from "../../models/product.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {firstValueFrom, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products?: Product[]

  private baseUrlApi: string = environment.API_URL

  private resourceName: string = 'products'

  private fullBaseUrlApi: string
  constructor(private http: HttpClient,private authService: AuthService) {
    this.fullBaseUrlApi = this.baseUrlApi + this.resourceName
  }

  getAll():Promise<Product[]> {
    const token = this.authService.token as string
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    const options = {headers}
    const obsHttp$ = this.http
      .get<ProductHttp[]>(`${this.fullBaseUrlApi}/`, options)
      .pipe(
        map((productsHttp: ProductHttp[]) => productsHttp.map((productHttp: ProductHttp) => Product.mapperProductHttpToProduct(productHttp)))
      )

    return firstValueFrom(obsHttp$)
  }
}
