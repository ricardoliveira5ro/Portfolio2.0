import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { LucideAngularModule, Send, Linkedin, Github, CodeXml, Home, BriefcaseBusiness, FolderGit2, Braces } from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [
		provideRouter(routes),
		provideAnimations(),
		importProvidersFrom(LucideAngularModule.pick({ Send, Linkedin, Github, CodeXml, Home, BriefcaseBusiness, FolderGit2, Braces }))
	],
};
