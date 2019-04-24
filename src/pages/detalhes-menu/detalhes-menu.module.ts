import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesMenuPage } from './detalhes-menu';

@NgModule({
  declarations: [
    DetalhesMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesMenuPage),
  ],
})
export class DetalhesMenuPageModule {}
