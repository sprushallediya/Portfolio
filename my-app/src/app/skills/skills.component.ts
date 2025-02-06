import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true, // Mark this component as standalone
  imports: [CommonModule], // Import CommonModule for *ngFor
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB'];
}
