import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable }                            from '@angular/core';
import { Observable }                            from 'rxjs/Observable';
import { environment }                           from '../../../environments/environment';
import { Picture }                               from '../../shared/models/picture.model';
import { AbstractService }                       from './abstract.service';
import { NotImplementedException }               from './exceptions/not-implemented.exception';

@Injectable()
export class PictureService extends AbstractService<Picture> {

    static readonly RESOURCE_PATH = "pictures";

    constructor(http: HttpClient) {
        super(http, PictureService.RESOURCE_PATH);
    }

    upload(file: File): Observable<Picture> {
        const url = environment.apiUrl  +"/" + PictureService.RESOURCE_PATH + "/upload";
        const data = new FormData();
        data.append("file", file);

        const headers = new HttpHeaders({
            'enctype': 'multipart/form-data'
        });

        return this.http.post<Picture>(url, data, { headers: headers });
    }

    download(id: number): Observable<Blob> {
        const url = this.resolveUri([PictureService.RESOURCE_PATH, id, 'download']);
        return this.http.get(url, { responseType: 'blob' });
    }

    get(id: number): Observable<Picture> {
        throw new NotImplementedException();
    }

    getAll(): Observable<Picture[]> {
        throw new NotImplementedException();
    }

    create(model: Picture): Observable<HttpResponse<Picture>> {
        throw new NotImplementedException();
    }
}
