import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetupComponent } from './setup.component';
import { CreateComponent } from './create/create.component';
import { RecoverComponent } from './recover/recover.component';

const routes: Routes = [
  { path: 'setup', component: SetupComponent },
  { path: 'setup/create', component: CreateComponent },
  { path: 'setup/recover', component: RecoverComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class SetupRoutingModule {}