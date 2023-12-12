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
});
