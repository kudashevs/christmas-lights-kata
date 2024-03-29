import {LightsGrid} from './LightsGrid';

describe('LightsGrid testsuite', () => {
  it('can be instantiated with height/width', () => {
    const grid = new LightsGrid(5, 5);

    expect(grid.getHeight()).toBe(5);
    expect(grid.getWidth()).toBe(5);
  });

  it('can be instantiated with default size', () => {
    const grid = new LightsGrid();

    expect(grid.getHeight()).toBe(1000);
    expect(grid.getWidth()).toBe(1000);
  });

  it('can be instantiated with lights off', () => {
    const grid = new LightsGrid(10, 10);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        expect(grid.getLight(i, j).isOn()).toBe(false);
      }
    }
  });

  it('can turn on all of the lights', () => {
    const grid = new LightsGrid(10, 10);
    grid.turnOn(0, 0, 9, 9);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        expect(grid.getLight(i, j).isOn()).toBe(true);
      }
    }
  });

  it('can turn on the lights in the first row', () => {
    const grid = new LightsGrid(10, 10);
    grid.turnOn(0, 0, 9, 0);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (j === 0) {
          expect(grid.getLight(i, j).isOn()).toBe(true);
        } else {
          expect(grid.getLight(i, j).isOn()).toBe(false);
        }
      }
    }
  });

  it('can turn on the lights in the first column', () => {
    const grid = new LightsGrid(10, 10);
    grid.turnOn(0, 0, 0, 9);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (i === 0) {
          expect(grid.getLight(i, j).isOn()).toBe(true);
        } else {
          expect(grid.getLight(i, j).isOn()).toBe(false);
        }
      }
    }
  });

  it('can turn off the lights in the first row', () => {
    const grid = new LightsGrid(10, 10);
    grid.turnOn(0, 0, 9, 9);
    grid.turnOff(0, 0, 9, 0);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (j === 0) {
          expect(grid.getLight(i, j).isOn()).toBe(false);
        } else {
          expect(grid.getLight(i, j).isOn()).toBe(true);
        }
      }
    }
  });

  it('can toggle the lights in the first row', () => {
    const grid = new LightsGrid(10, 10);
    grid.toggle(0, 0, 9, 0);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (j === 0) {
          expect(grid.getLight(i, j).isOn()).toBe(true);
        } else {
          expect(grid.getLight(i, j).isOn()).toBe(false);
        }
      }
    }
  });

  it('can toggle the lights it the first column', () => {
    const grid = new LightsGrid(10, 10);
    grid.toggle(0, 0, 0, 9);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (i === 0) {
          expect(grid.getLight(i, j).isOn()).toBe(true);
        } else {
          expect(grid.getLight(i, j).isOn()).toBe(false);
        }
      }
    }
  });

  it('can turn off the middle lights (499,499 through 500,500)', () => {
    const grid = new LightsGrid();
    grid.toggle(499, 499, 500, 500);

    for (let i = 499; i <= 500; i++) {
      for (let j = 499; j <= 500; j++) {
        expect(grid.getLight(i, j).isOn()).toBe(true);
      }
    }
  });

  it('can count lit lights', () => {
    const grid = new LightsGrid();
    grid.toggle(0, 0, 999, 0);

    expect(grid.countLit()).toBe(1000);
  });

  it('can count brightness', () => {
    const grid = new LightsGrid();
    grid.toggle(0, 0, 999, 999);

    expect(grid.countBrightness()).toBe(2000000);
  });
});
