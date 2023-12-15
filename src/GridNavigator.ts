import {LightsGrid} from './LightsGrid';
import {Navigator} from './Navigator';

export class GridNavigator implements Navigator {
  public invoke(grid: LightsGrid, method: string) {
    for (let i = 0; i < grid.getHeight(); i++) {
      for (let j = 0; j < grid.getWidth(); j++) {
        grid.getLight(i, j)[method]();
      }
    }
  }
}
