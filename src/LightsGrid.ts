import {Light} from './Light';

export class LightsGrid {
  private readonly height: number;
  private readonly width: number;
  private grid: Light[][];

  constructor(height: number = 1000, width: number = 1000) {
    this.height = height;
    this.width = width;

    this.populateGrid();
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
    for (let i = leftX; i <= rightX; i++) {
      for (let j = leftY; j <= rightY; j++) {
        (this.grid[i][j]).turnOn();
      }
    }
  }

  public turnOff(leftX: number, leftY: number, rightX: number, rightY: number): void {
    for (let i = leftX; i <= rightX; i++) {
      for (let j = leftY; j <= rightY; j++) {
        (this.grid[i][j]).turnOff();
      }
    }
  }

  public toggle(leftX: number, leftY: number, rightX: number, rightY: number): void {
    for (let i = leftX; i <= rightX; i++) {
      for (let j = leftY; j <= rightY; j++) {
        (this.grid[i][j]).toggle();
      }
    }
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

  public countBrightness(): number {
    let brightness: number = 0;

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        brightness += (this.grid[i][j]).getBrightness();
      }
    }

    return brightness;
  }
}
