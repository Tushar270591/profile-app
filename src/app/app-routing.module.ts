import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { TranslateModule, TranslatePipe } from "@ngx-translate/core"


const routes: Routes = [{ path: '', component: ProfileSettingsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes), TranslateModule],
  exports: [RouterModule, TranslatePipe],
  providers: [TranslateModule]
})
export class AppRoutingModule { }
