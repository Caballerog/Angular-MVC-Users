import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { UsersComponent } from './views/users/users.component';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
