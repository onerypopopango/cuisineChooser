import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseFoodComponent } from '@app/choose-food/choose-food.component';
import { ErrorPageComponent } from '@app/error-page/error-page.component';

const routes: Routes = [
  { path: 'choose-food', component: ChooseFoodComponent },
  { path: '', redirectTo: '/choose-food', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
