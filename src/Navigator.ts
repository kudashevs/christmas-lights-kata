import {LightsGrid} from './LightsGrid';

export interface Navigator {
  invoke(grid: LightsGrid, method: string): void;
}
