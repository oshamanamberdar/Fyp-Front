import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Supplier} from "./supplier";


@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSupplier(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiServerUrl}/supplier/all`)
  }
  public addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiServerUrl}/supplier/add`, supplier)
  }
  public deleteSupplierById(supplierId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/supplier/delete/${supplierId}`)
  }
  public  getSupplierData(supplierId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/supplier/find/${supplierId}`)
  }

}
