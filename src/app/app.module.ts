import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import { AppRountingModule } from './app-routing.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './modules/home/login/login.component';
import { RegisterComponent } from './modules/home/register/register.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { IndexComponent } from './modules/home/index/index.component';
import { LedgerComponent } from './modules/home/ledger/ledger.component';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    IndexComponent,
    LedgerComponent
  ],
  imports: [    
    UserModule,
    FormsModule,
    LayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRountingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
