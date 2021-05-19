import { TestBed } from '@angular/core/testing';

import { DogService } from './dog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DogService', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let dogService: DogService;

    beforeEach(() => TestBed.configureTestingModule({
        providers: [DogService],
        imports: [HttpClientTestingModule]
    }));

    it('should be created', () => {
        const service: DogService = TestBed.get(DogService);
        expect(service).toBeTruthy();
    });

    // it('#findAllBreedsReponse should return value from observable',
    //     (done: DoneFn) => {
    //         dogService.findAllBreedsReponse().subscribe(value => {
    //         expect(value).toBe('JSON value');
    //         done();
    //     });
    // });
});
