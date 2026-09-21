import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponentDead } from './app.component';

describe('AppComponentDead', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponentDead
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponentDead);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'uma-estates'`, () => {
    const fixture = TestBed.createComponent(AppComponentDead);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('uma-estates');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponentDead);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('uma-estates app is running!');
  });
});
