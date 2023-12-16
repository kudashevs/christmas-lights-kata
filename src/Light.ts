export class Light {
  private state: number = 0;

  public isOn(): boolean {
    return this.state > 0;
  }

  public turnOn(): void {
    this.state++;
  }

  public turnOff(): void {
    if (this.state > 0) {
      this.state--;
    }
  }

  public toggle(): void {
    this.state += 2;
  }

  public getBrightness(): number {
    return this.state;
  }
}
