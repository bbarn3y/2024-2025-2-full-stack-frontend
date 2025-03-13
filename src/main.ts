import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ConfigurationService} from './app/_services/configuration.service';

ConfigurationService.loadConfiguration().then((configuration) => {
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
})
