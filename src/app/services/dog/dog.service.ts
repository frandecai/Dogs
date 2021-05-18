import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PuppieAPIResponse } from '../../interfaces/PuppieAPIResponse.interface';

@Injectable({
    providedIn: 'root'
})
export class DogService {

    constructor(private http: HttpClient) { }

    findAllBreedsReponse(): Observable<JSON> {
        const endpoint = `https://dog.ceo/api/breeds/list/all`;
        const response = this.http.get<JSON>(endpoint);

        return response;
    }

    findAllSubBreedsByBreedReponse(breed: string): Observable<JSON> {
        const endpoint = `https://dog.ceo/api/breed/${breed}/list`;
        const response = this.http.get<JSON>(endpoint);

        return response;
    }

    findSingleDogRandomReponse(): Observable<PuppieAPIResponse> {
        const endpoint = `https://dog.ceo/api/breeds/image/random`;

        return this.http.get<PuppieAPIResponse>(endpoint);
    }

    findDogByBreedReponse(breed: string): Observable<JSON> {
        const endpoint = `https://dog.ceo/api/breed/${breed}/images/random`;

        return this.http.get<JSON>(endpoint);
    }

    findAllDogsByBreedReponse(breed: string): Observable<JSON> {
        const endpoint = `https://dog.ceo/api/breed/${breed}/images`;

        return this.http.get<JSON>(endpoint);
    }

    findDogByBreedAndSubBreedReponse(breed: string, subBreed: string): Observable<PuppieAPIResponse> {
        const endpoint = subBreed ?
            `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random` :
            `https://dog.ceo/api/breed/${breed}/images/random`;

        return this.http.get<PuppieAPIResponse>(endpoint);
    }

    findAllDogsByBreedAndSubBreed(breed: string, subBreed: string): Observable<JSON> {
        const endpoint = subBreed ?
            `https://dog.ceo/api/breed/${breed}/${subBreed}/images` :
            `https://dog.ceo/api/breed/${breed}/images`;

        return this.http.get<JSON>(endpoint);
    }
}
