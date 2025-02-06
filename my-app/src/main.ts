import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AboutComponent } from './app/about/about.component';
import { EducationComponent } from './app/education/education.component';
import { ExtracurricularComponent } from './app/extracurricular/extracurricular.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { SkillsComponent } from './app/skills/skills.component';
import { ContactComponent } from './app/contact/contact.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'extracurricular', component: ExtracurricularComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
