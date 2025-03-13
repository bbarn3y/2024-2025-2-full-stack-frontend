import { Injectable } from '@angular/core';
import {Configuration} from '../_models/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  static configuration: Configuration;

  constructor() { }

  static fetchConfiguration(): Promise<Configuration> {
    return fetch('/assets/configuration.json')
      .then((response) => response.json());
  }

  static loadConfiguration(): Promise<Configuration> {
    if (ConfigurationService.configuration) {
      return new Promise<Configuration>((resolve, reject) => {
        resolve(ConfigurationService.configuration);
      })
    } else {
      return ConfigurationService.fetchConfiguration().then((configuration) => {
        ConfigurationService.configuration = configuration;
        return configuration;
      })
    }
  }

}
