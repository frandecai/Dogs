import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('Should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`Should have as title 'Dogs'`, () => {
        expect(app.title).toEqual('Dogs');
    });

    it('Should render title in a h1 tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Dogs');
    });

    it('Should have a list of three options to choose', () => {
        const pageHTML: HTMLElement = fixture.nativeElement;
        const listHTML = pageHTML.querySelector('.list-group');
        expect(listHTML).toBeTruthy();
        if(listHTML) {
            let firstElementListHTML = listHTML.getElementsByClassName('list-group-item')[0];
            let secondElementListHTML = listHTML.getElementsByClassName('list-group-item')[1];
            let thirdElementListHTML = listHTML.getElementsByClassName('list-group-item')[2];
            expect(firstElementListHTML.textContent).toEqual('A single dog');
            expect(secondElementListHTML.textContent).toEqual('By breed');
            expect(thirdElementListHTML.textContent).toEqual('By breed & sub-breed');
        }
    });
});
