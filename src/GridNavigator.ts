import {GridArea} from './GridArea';
import {LightsGrid} from './LightsGrid';
import {Navigator} from './Navigator';

export class GridNavigator implements Navigator {
  public invoke(grid: LightsGrid, method: string, area: GridArea = undefined): void {
    if (area) {
      this.processArea(grid, method, area);
      return;
    }

    this.processRaw(grid, method);
  }

  private processArea(grid: LightsGrid, method: string, area: GridArea): void {
    const leftX: number = area.getLeftX();
    const leftY: number = area.getLeftY();
    const rightX: number = area.getRightX();
    const rightY: number = area.getRightY();

    for (let i = leftX; i <= rightX; i++) {
      for (let j = leftY; j <= rightY; j++) {
        grid.getLight(i, j)[method]();
      }
    }
  }

  private processRaw(grid: LightsGrid, method: string): void {
    for (let i = 0; i < grid.getHeight(); i++) {
      for (let j = 0; j < grid.getWidth(); j++) {
        grid.getLight(i, j)[method]();
      }
    }
  }
}
