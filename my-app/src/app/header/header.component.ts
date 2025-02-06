import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Define the active section property
  activeSection: string = 'about';

  // Define the list of section IDs
  sections = ['about', 'education', 'projects', 'skills', 'extracurricular', 'contact'];

  // Update the active section based on scroll
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateActiveSection();
  }

  // Scroll to the selected section and set it as active
  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  // Update active section dynamically based on scroll position
  private updateActiveSection(): void {
    let currentSection = '';
    for (const sectionId of this.sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    }
    if (currentSection) {
      this.activeSection = currentSection;
    }
  }
}
