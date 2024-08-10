import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAppPlayerComponent } from './dialog-app-player.component';

describe('DialogAppPlayerComponent', () => {
  let component: DialogAppPlayerComponent;
  let fixture: ComponentFixture<DialogAppPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAppPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAppPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
