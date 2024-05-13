import { ApplicationConfig, EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { NbThemeModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

const provideNebular = (): EnvironmentProviders[] => [
  importProvidersFrom(NbThemeModule.forRoot({ name: 'cosmic' }), NbSidebarModule.forRoot(), NbMenuModule.forRoot()),
  importProvidersFrom(NbEvaIconsModule)
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,  withViewTransitions(), 
    withComponentInputBinding()),
    provideClientHydration(), 
    ...provideNebular(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
