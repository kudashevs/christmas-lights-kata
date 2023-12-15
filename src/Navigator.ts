import {GridArea} from './GridArea';
import {LightsGrid} from './LightsGrid';

export interface Navigator {
  invoke(grid: LightsGrid, method: string, area: GridArea = undefined): void;
}
