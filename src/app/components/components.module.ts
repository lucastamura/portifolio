import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectsComponent } from './card-projects/card-projects.component';

@NgModule({
  declarations: [CardProjectsComponent],
  imports: [CommonModule],
  exports: [CardProjectsComponent],
})
export class ComponentsModule {}
