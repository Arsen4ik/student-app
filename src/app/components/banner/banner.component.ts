import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  advantages = [
    { title: '15+', text: 'Years of experience' },
    { title: '100k', text: 'Students worldwide' },
    { title: '45+', text: 'Class subjects' },
    { title: '98%', text: 'Student satisfactions' },
  ]
}
