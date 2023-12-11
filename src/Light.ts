export class Light {
  private state = false;

  public isOn(): boolean {
    return this.state;
  }

  public turnOn(): void {
    this.state = true;
  }

  public turnOff(): void {
    this.state = false;
  }
}
