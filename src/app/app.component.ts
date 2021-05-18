import { Component, OnInit } from '@angular/core';

import { DogService } from './services/dog/dog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Dogs';

    dogsURLs = [];

    breeds = [];
    subBreeds = [];

    singleDogActive: boolean = false;
    byBreedActive: boolean = false;
    byBreedandSubbreedActive: boolean = false;

    selectedBreed = '';
    selectedSubBreed = '';

    search: boolean = false;

    constructor(private dogService: DogService) {
    }

    clickSingleDog() {
        this.singleDogActive = true;
        this.byBreedActive = false;
        this.byBreedandSubbreedActive = false;
    }

    clickByBreed() {
        this.singleDogActive = false;
        this.byBreedActive = true;
        this.byBreedandSubbreedActive = false;
    }

    clickByBreedAndSubbreed() {
        this.singleDogActive = false;
        this.byBreedActive = false;
        this.byBreedandSubbreedActive = true;
    }

    findAllBreeds() {
        this.dogService.findAllBreedsReponse().
            subscribe(
                result => {
                    // tslint:disable-next-line: forin
                    let breedSelectedFlag: boolean = false;
                    for (const breed in result['message']) {
                        this.breeds.push(breed);

                        if (breedSelectedFlag == false) {
                            this.selectedBreed = breed;
                            breedSelectedFlag = true;
                        }
                    }
                },
                error  => {
                    console.log(error);
                }
            );
    }

    findAllSubBreedsByBreed() {
        this.dogService.findAllSubBreedsByBreedReponse(this.selectedBreed).
            subscribe(
                result => {
                    // tslint:disable-next-line: forin
                    this.subBreeds = [];
                    for (let i = 0; i < result['message'].length; i++) {
                        this.subBreeds.push(result['message'][i]);
                    }

                    this.selectedSubBreed = this.subBreeds[0];
                },
                error  => {
                    console.log(error);
                }
            );
    }

    findSingleDogRandom() {
        this.dogService.findSingleDogRandomReponse().
            subscribe(
                result => {
                    // tslint:disable-next-line: forin
                    this.dogsURLs = [];
                    this.dogsURLs.push(result.message);
                },
                error  => {
                    console.log(error);
                }
            );
    }

    findDogByBreed() {
        this.dogService.findDogByBreedReponse(this.selectedBreed).
            subscribe(
                result => {
                    // tslint:disable-next-line: forin
                    this.dogsURLs = [];
                    this.dogsURLs.push(result['message']);
                },
                error  => {
                    console.log(error);
                }
            );
    }

    findAllDogsByBreed() {
        this.dogService.findAllDogsByBreedReponse(this.selectedBreed).
            subscribe(
                result => {
                    // tslint:disable-next-line: forin
                    this.dogsURLs = [];
                    for (let i = 0; i < result['message'].length; i++) {
                        this.dogsURLs.push(result['message'][i]);
                    }
                },
                error  => {
                    console.log(error);
                }
            );
    }

    findDogByBreedAndSubBreed() {
        console.log(this.selectedBreed, this.selectedSubBreed);

        this.dogService.findDogByBreedAndSubBreedReponse(this.selectedBreed, this.selectedSubBreed).
            subscribe(
                result => {
                    // tslint:disable-next-line: forin
                    this.dogsURLs = [];
                    this.dogsURLs.push(result['message']);
                },
                error  => {
                    console.log(error);
                }
            );
    }

    findAllDogsByBreedAndSubBreed() {
        console.log(this.selectedBreed, this.selectedSubBreed);

        this.dogService.findAllDogsByBreedAndSubBreed(this.selectedBreed, this.selectedSubBreed).
            subscribe(
                result => {
                    // tslint:disable-next-line: forin
                    this.dogsURLs = [];
                    for (let i = 0; i < result['message'].length; i++) {
                        this.dogsURLs.push(result['message'][i]);
                    }
                },
                error  => {
                    console.log(error);
                }
            );
    }

    ngOnInit() {
        this.findAllBreeds();
    }
}
