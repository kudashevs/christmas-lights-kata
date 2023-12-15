import {GridArea} from './GridArea';
import {GridNavigator} from './GridNavigator';
import {Light} from './Light';
import {Navigator} from './Navigator';

export class LightsGrid {
  private readonly height: number;
  private readonly width: number;
  private grid: Light[][];
  private navigator: Navigator;

  constructor(height: number = 1000, width: number = 1000) {
    this.height = height;
    this.width = width;

    this.initNavigator();
    this.populateGrid();
  }

  private initNavigator(): void {
    this.navigator = new GridNavigator();
  }

  private populateGrid(): void {
    this.grid = [];

    for (let i = 0; i < this.height; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = new Light();
      }
    }
  }

  public getHeight(): number {
    return this.height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getLight(x: number, y: number): Light {
    return this.grid[x][y];
  }

  public turnOn(leftX: number, leftY: number, rightX: number, rightY: number): void {
    this.navigator.invoke(this, 'turnOn', new GridArea(leftX, leftY, rightX, rightY));
  }

  public turnOff(leftX: number, leftY: number, rightX: number, rightY: number): void {
    this.navigator.invoke(this, 'turnOff', new GridArea(leftX, leftY, rightX, rightY));
  }

  public toggle(leftX: number, leftY: number, rightX: number, rightY: number): void {
    this.navigator.invoke(this, 'toggle', new GridArea(leftX, leftY, rightX, rightY));
  }

  public countLit(): number {
    let count: number = 0;
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if ((this.grid[i][j]).isOn()) {
          count++;
        }
      }
    }

    return count;
  }
}
