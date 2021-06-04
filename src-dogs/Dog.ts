import { DogConfig } from '../src-types';
import { DOG_CONFIG } from './DogConfig';

export abstract class Dog {

  public static getCapabilities(): DogConfig {
    return DOG_CONFIG;
  }
}
