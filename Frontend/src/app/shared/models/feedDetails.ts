import { Food } from './food';
import { Location } from './location';
import { UOM } from './uom';

export interface FeedDetails {
  feedTime: string;
  food: Food;
  location: Location;
  quantity: number;
  repeatSchedule: boolean;
  totalDucks: number;
  uom: UOM;
}
