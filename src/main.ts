import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread the appConfig object into the configuration
  providers: [provideHttpClient(), ...appConfig.providers] // Combine HttpClient and existing providers
})
  .catch((err) => console.error(err));
