import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  students = [
    { id: 1, author: 'Michael Wong', spec: 'UI/UX Design Student', rating: '4.9', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' },
    { id: 2, author: 'Avril Song', spec: 'Web Development Student', rating: '4.8', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' },
    { id: 3, author: 'Jeane Wood', spec: 'Data Science Student', rating: '5.0', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' }
  ]
}
