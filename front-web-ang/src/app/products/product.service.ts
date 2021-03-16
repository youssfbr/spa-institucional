import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment.prod';

import { Product } from "./product";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = environment.APP_URL;   

    getProducts() : Observable<Product[]> {
        return this.http
            .get<Product[]>(this.UrlServiceV1 + "produtos");
    }
}