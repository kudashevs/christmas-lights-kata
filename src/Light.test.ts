import {Light} from './Light';

describe('Light testsuite', () => {
  it('should be off by default', () => {
    const light = new Light();

    expect(light.isOn()).toBe(false);
  });

  it('can be turned on', () => {
    const light = new Light();
    light.turnOn();

    expect(light.isOn()).toBe(true);
  });

  it('can be turned off', () => {
    const light = new Light();
    light.turnOn();
    light.turnOff();

    expect(light.isOn()).toBe(false);
  });

  it('can be toggled', () => {
    const light = new Light();
    light.toggle();

    expect(light.isOn()).toBe(true);

    light.toggle();
    expect(light.isOn()).toBe(true);
    expect(light.getBrightness()).toBe(4);
  });

  it('can increase brightness by 1 with turn on', () => {
    const light = new Light();
    light.turnOn();

    expect(light.getBrightness()).toBe(1);

    light.turnOn();
    light.turnOn();

    expect(light.getBrightness()).toBe(3);
  });

  it('can decrease brightness by 1 with turn off', () => {
    const light = new Light();
    light.turnOn();
    light.turnOff();

    expect(light.getBrightness()).toBe(0);

    light.turnOff();
    light.turnOff();
    expect(light.getBrightness()).toBe(0);
  });

  it('can increase brightness by 2 with toggle', () => {
    const light = new Light();
    light.toggle();

    expect(light.getBrightness()).toBe(2);

    light.toggle();
    light.toggle();
    expect(light.getBrightness()).toBe(6);
  });
});
