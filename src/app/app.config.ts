import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LucideAngularModule, Send, Linkedin, Github, CodeXml } from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [
		provideRouter(routes),
		importProvidersFrom(LucideAngularModule.pick({ Send, Linkedin, Github, CodeXml }))
	],
};
