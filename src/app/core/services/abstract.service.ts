import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable }               from 'rxjs/Observable';
import { isArray }                  from 'util';
import { environment }              from '../../../environments/environment';

/**
 * An abstract service which is used as a base for all data service.
 * @author Fabien
 */
export abstract class AbstractService<M> {
    /**
     * Supertype constructor for abstract service.
     * @param {HttpClient} http The HttpClient injected by Angular
     * @param {string} resourcePath The resource path
     */
    protected constructor(protected http: HttpClient,
                          protected resourcePath: string) {}

    // GET /{resourcePath}/{id}
    public get(id: number|string): Observable<M> {
        return this.http.get<M>(
            this.resolveUri([this.resourcePath, id]));
    }

    // GET /{resourcePath}
    public getAll(): Observable<M[]> {
        return this.http.get<M[]>(
            this.resolveUri([this.resourcePath])).shareReplay();
    };

    // POST /{resourcePath}
    public create(model: M): Observable<HttpResponse<M>> {
        return this.http.post<M>(
            this.resolveUri([this.resourcePath]), model, { observe: 'response' });
    }

    //TODO public abstract put(model: M): M;

    /**
     * Build a URL with parts and apiUrl.
     * Strips redundants slashes separator
     * @param {any[]} parts Parts of the URI
     * @param queryParams Query params from which build optional query string
     * @returns {string} The complete URL
     */
    protected resolveUri(parts: any[], queryParams?: any): string {
        return environment.apiUrl + parts
            .map(o => o.toString())
            .join('/')
            .split("/")
            .filter(part => part && part.trim().length > 0)
            .join("/")
            + this.queryString(queryParams);
    }

    /**
     * Build a query string with given parameters.
     * Support concatenation of array values
     * i.e. "id": [1,2,3] => ?id[]=1&id[]=2&id[]=3
     * @param queryParams An object
     * @returns {string} The query string representation, with '?' prepended
     */
    private queryString(queryParams: any) {
        if (!queryParams) return '';

        let tuples: [string, any][] = [];
        for (let prop of Object.getOwnPropertyNames(queryParams))
        {
            if (queryParams[prop]) {
                if (isArray(queryParams[prop])) {
                    for (let value of queryParams[prop]) {
                        tuples.push([prop + '[]', value]);
                    }
                } else {
                    tuples.push([prop, queryParams[prop]]);
                }
            }
        }

        return "?" + tuples.map(tuple => tuple.join("=")).join("&");
    }


}
