import {Light} from './Light';

export class LightsGrid {
  private readonly width: number;
  private readonly height: number;
  private grid: Light[][];

  constructor(width: number = 1000, height: number = 1000) {
    this.width = width;
    this.height = height;

    this.populate();
  }

  private populate(): void {
    let arr = new Array(this.width);
    for (let i = 0; i < this.width; i++) {
      arr[i] = new Array(this.height);
      for (let j = 0; j < this.height; j++) {
        arr[i][j] = new Light();
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
}
