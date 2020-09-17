import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TracksComponent } from './pages/tracks/tracks.component';
import { DetailsComponent } from './pages/tracks/details/details.component';
import { HereMapsModule } from 'ng2-heremaps';
import { DriversComponent } from './pages/drivers/drivers.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HereMapsModule.forRoot({
      apiKey: 'xCSKCKWyH8uVFxd9gTHsIetlNSNrizwSKJVPeH4TO1c',
      appId: '7mOqEiFk9WoxZLMH8jHw',
      apiVersion: '3.1',
      libraries: ['core', 'service']
    }),
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TracksComponent,
    DetailsComponent,
    DriversComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
