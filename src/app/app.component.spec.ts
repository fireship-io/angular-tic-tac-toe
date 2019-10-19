import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NbLayoutModule } from '@nebular/theme';
import { NebularTestingModule } from './nebular-testing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SquareComponent } from './square/square.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbLayoutModule, NebularTestingModule, RouterTestingModule],
      declarations: [AppComponent, BoardComponent, SquareComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('myapp');
  });
});
