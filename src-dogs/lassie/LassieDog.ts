import { Dog } from '../Dog';
import { LASSIE_CONFIG } from './LassieConfig';

export class LassieDog extends Dog {
  protected static getDogConfig = () => LASSIE_CONFIG;
}
