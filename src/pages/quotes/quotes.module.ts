import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { quotesPage } from './quotes';

@NgModule({
  declarations: [
    quotesPage,
  ],
  imports: [
    IonicPageModule.forChild(quotesPage),
  ],
})
export class quotesPageModule {}
