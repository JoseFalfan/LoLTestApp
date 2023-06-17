import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsPage } from './champions.page';

describe('ChampionsPage', () => {
  let component: ChampionsPage;
  let fixture: ComponentFixture<ChampionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChampionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
