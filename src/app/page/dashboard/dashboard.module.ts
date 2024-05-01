import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.page';
import { ComponentsModule } from '../../components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    CarouselModule,
  ],

  declarations: [DashboardComponent],
})
export class DashboardModule {}
