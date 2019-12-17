import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { UnsetUserAction } from 'src/app/modules/auth/auth.actions';

@Component({
  selector: 'kui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private store: Store<State>) {}

  onCloseSesion() {
    this.store.dispatch(new UnsetUserAction())
  }
  
}
