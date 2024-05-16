import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {LucideAngularModule, Send} from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [
		provideRouter(routes),
		importProvidersFrom(LucideAngularModule.pick({Send}))
	],
};
