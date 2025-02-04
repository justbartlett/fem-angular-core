import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';

@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, MaterialModule]
})
export class ProjectsModule {}
