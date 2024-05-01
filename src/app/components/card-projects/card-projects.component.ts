import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss'],
})
export class CardProjectsComponent {
  @Input() img!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() skill!: any;
}
