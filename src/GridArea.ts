export class GridArea {
  private readonly leftX: number;
  private readonly leftY: number;
  private readonly rightX: number;
  private readonly rightY: number;

  constructor(leftX: number, leftY: number, rightX: number, rightY: number) {
    this.leftX = leftX;
    this.leftY = leftY;
    this.rightX = rightX;
    this.rightY = rightY;
  }

  public getLeftX(): number {
    return this.leftX;
  }

  public getLeftY(): number {
    return this.leftY;
  }

  public getRightX(): number {
    return this.rightX;
  }

  public getRightY(): number {
    return this.rightY;
  }
}
