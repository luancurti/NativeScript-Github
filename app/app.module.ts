import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { UserService } from './home/user.service';
import { HomeComponent } from './home/home.component';

@NgModule({
	bootstrap: [
		AppComponent,
	],
	imports: [
		NativeScriptModule,
		AppRoutingModule,
		NativeScriptHttpModule,
		NativeScriptFormsModule,
	],
	declarations: [
		AppComponent,
    HomeComponent,
	],
  providers: [
    UserService,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
